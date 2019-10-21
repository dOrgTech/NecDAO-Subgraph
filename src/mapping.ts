import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  Contract,
  Redeem,
  Release,
  LockToken,
  ExtendLocking
} from "../generated/Contract/Contract";
import {
  RedeemEntity,
  LockTokenEntity,
  ExtendLockingEntity,
  ReleaseEntity,
  TotalEvents,
  Lock
} from "../generated/schema";

// export type CreateLockParameters = {
//   locker: Bytes;
//   lockingId: BigInt;
//   amount: BigInt;
//   period: BigInt;
// };

// export type ExtendLockParameters = {
//   locker: Bytes;
//   lockingId: BigInt;
//   extendPeriod: BigInt;
// };

// export type ReleaseLockParameters = {
//   lockingId: BigInt;
// };

export function referenceFunction(event: Redeem): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = RedeemEntity.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new RedeemEntity(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1);

  // Entity fields can be set based on event parameters
  entity._lockingId = event.params._lockingId;
  entity._beneficiary = event.params._beneficiary;
  entity._amount = event.params._amount;
  entity._batchIndex = event.params._batchIndex;

  // Entities can be written to the store with `.save()`
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getRepRewardPerBatch(...)
  // - contract.release(...)
  // - contract.repRewardConstB(...)
  // - contract.redeem(...)
  // - contract.redeemEnableTime(...)
  // - contract.repRewardConstA(...)
  // - contract.avatar(...)
  // - contract.maxLockingBatches(...)
  // - contract.MAX_LOCKING_BATCHES_HARDCAP(...)
  // - contract.getAgreementHash(...)
  // - contract.batchTime(...)
  // - contract.batchesIndexCap(...)
  // - contract.startTime(...)
  // - contract.lock(...)
  // - contract.lockCounter(...)
  // - contract.lockers(...)
  // - contract.reputationRewardLeft(...)
  // - contract.batches(...)
  // - contract.totalLockedLeft(...)
  // - contract.getLockingIdScore(...)
  // - contract.token(...)
}

function createLock(params: LockTokenEntity, event: LockToken): void {
  let entity = Lock.load(params._lockingId.toString());
  if (entity == null) {
    entity = new Lock(params._lockingId.toString());
  }

  entity.locker = params._locker;
  entity.period = params._period;
  entity.amount = params._amount;
  entity.lockTimestamp = event.block.timestamp;
  entity.periodDuration = params._period;
  entity.released = false;

  entity.save();
}

function extendLock(params: ExtendLockingEntity, event: ExtendLocking): void {
  let entity = Lock.load(params._lockingId.toString());

  entity.periodDuration = entity.period.plus(params._extendPeriod);
  entity.save();
}

function releaseLock(params: ReleaseEntity): void {
  let entity = Lock.load(params._lockingId.toString());

  entity.released = true;
  entity.save();
}

function getNextEventId(): string {
  let entity = TotalEvents.load("1");

  if (entity == null) {
    entity = new TotalEvents("1");
    entity.count = BigInt.fromI32(0);
  }

  let newCount = entity.count.plus(BigInt.fromI32(1));
  entity.count = newCount;

  entity.save();
  return newCount.toString();
}

export function handleRedeem(event: Redeem): void {
  let id = getNextEventId();
  let entity = new RedeemEntity(id);

  entity._lockingId = event.params._lockingId;
  entity._beneficiary = event.params._beneficiary;
  entity._amount = event.params._amount;
  entity._batchIndex = event.params._batchIndex;

  entity.save();
}

export function handleRelease(event: Release): void {
  let id = getNextEventId();
  let entity = new ReleaseEntity(id);

  entity._lockingId = event.params._lockingId;
  entity._beneficiary = event.params._beneficiary;
  entity._amount = event.params._amount;

  entity.save();

  releaseLock(entity);
}

export function handleLockToken(event: LockToken): void {
  let id = getNextEventId();
  let entity = new LockTokenEntity(id);

  entity._locker = event.params._locker;
  entity._lockingId = event.params._lockingId;
  entity._amount = event.params._amount;
  entity._period = event.params._period;

  entity.save();

  createLock(entity, event);
}

export function handleExtendLocking(event: ExtendLocking): void {
  let id = getNextEventId();
  let entity = new ExtendLockingEntity(id);

  entity._locker = event.params._locker;
  entity._lockingId = event.params._lockingId;
  entity._extendPeriod = event.params._extendPeriod;

  entity.save();

  extendLock(entity, event);
}
