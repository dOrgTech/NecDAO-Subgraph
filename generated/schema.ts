// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RedeemEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemEntity", id.toString(), this);
  }

  static load(id: string): RedeemEntity | null {
    return store.get("RedeemEntity", id) as RedeemEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _lockingId(): BigInt {
    let value = this.get("_lockingId");
    return value.toBigInt();
  }

  set _lockingId(value: BigInt) {
    this.set("_lockingId", Value.fromBigInt(value));
  }

  get _beneficiary(): Bytes {
    let value = this.get("_beneficiary");
    return value.toBytes();
  }

  set _beneficiary(value: Bytes) {
    this.set("_beneficiary", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _batchIndex(): BigInt {
    let value = this.get("_batchIndex");
    return value.toBigInt();
  }

  set _batchIndex(value: BigInt) {
    this.set("_batchIndex", Value.fromBigInt(value));
  }
}

export class LockTokenEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LockTokenEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LockTokenEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LockTokenEntity", id.toString(), this);
  }

  static load(id: string): LockTokenEntity | null {
    return store.get("LockTokenEntity", id) as LockTokenEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _locker(): Bytes {
    let value = this.get("_locker");
    return value.toBytes();
  }

  set _locker(value: Bytes) {
    this.set("_locker", Value.fromBytes(value));
  }

  get _lockingId(): BigInt {
    let value = this.get("_lockingId");
    return value.toBigInt();
  }

  set _lockingId(value: BigInt) {
    this.set("_lockingId", Value.fromBigInt(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _period(): BigInt {
    let value = this.get("_period");
    return value.toBigInt();
  }

  set _period(value: BigInt) {
    this.set("_period", Value.fromBigInt(value));
  }
}

export class ExtendLockingEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExtendLockingEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExtendLockingEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExtendLockingEntity", id.toString(), this);
  }

  static load(id: string): ExtendLockingEntity | null {
    return store.get("ExtendLockingEntity", id) as ExtendLockingEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _lockingId(): BigInt {
    let value = this.get("_lockingId");
    return value.toBigInt();
  }

  set _lockingId(value: BigInt) {
    this.set("_lockingId", Value.fromBigInt(value));
  }

  get _locker(): Bytes {
    let value = this.get("_locker");
    return value.toBytes();
  }

  set _locker(value: Bytes) {
    this.set("_locker", Value.fromBytes(value));
  }

  get _extendPeriod(): BigInt {
    let value = this.get("_extendPeriod");
    return value.toBigInt();
  }

  set _extendPeriod(value: BigInt) {
    this.set("_extendPeriod", Value.fromBigInt(value));
  }
}

export class ReleaseEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReleaseEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReleaseEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReleaseEntity", id.toString(), this);
  }

  static load(id: string): ReleaseEntity | null {
    return store.get("ReleaseEntity", id) as ReleaseEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _lockingId(): BigInt {
    let value = this.get("_lockingId");
    return value.toBigInt();
  }

  set _lockingId(value: BigInt) {
    this.set("_lockingId", Value.fromBigInt(value));
  }

  get _beneficiary(): Bytes {
    let value = this.get("_beneficiary");
    return value.toBytes();
  }

  set _beneficiary(value: Bytes) {
    this.set("_beneficiary", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }
}

export class BatchDataEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BatchDataEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BatchDataEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BatchDataEntity", id.toString(), this);
  }

  static load(id: string): BatchDataEntity | null {
    return store.get("BatchDataEntity", id) as BatchDataEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lockCount(): BigInt {
    let value = this.get("lockCount");
    return value.toBigInt();
  }

  set lockCount(value: BigInt) {
    this.set("lockCount", Value.fromBigInt(value));
  }

  get batchId(): BigInt {
    let value = this.get("batchId");
    return value.toBigInt();
  }

  set batchId(value: BigInt) {
    this.set("batchId", Value.fromBigInt(value));
  }

  get userScore(): BigInt {
    let value = this.get("userScore");
    return value.toBigInt();
  }

  set userScore(value: BigInt) {
    this.set("userScore", Value.fromBigInt(value));
  }

  get totalScore(): BigInt {
    let value = this.get("totalScore");
    return value.toBigInt();
  }

  set totalScore(value: BigInt) {
    this.set("totalScore", Value.fromBigInt(value));
  }
}

export class TotalEvents extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TotalEvents entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TotalEvents entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TotalEvents", id.toString(), this);
  }

  static load(id: string): TotalEvents | null {
    return store.get("TotalEvents", id) as TotalEvents | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class Lock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Lock entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Lock entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Lock", id.toString(), this);
  }

  static load(id: string): Lock | null {
    return store.get("Lock", id) as Lock | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get locker(): Bytes {
    let value = this.get("locker");
    return value.toBytes();
  }

  set locker(value: Bytes) {
    this.set("locker", Value.fromBytes(value));
  }

  get period(): BigInt {
    let value = this.get("period");
    return value.toBigInt();
  }

  set period(value: BigInt) {
    this.set("period", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get released(): boolean {
    let value = this.get("released");
    return value.toBoolean();
  }

  set released(value: boolean) {
    this.set("released", Value.fromBoolean(value));
  }

  get lockTimestamp(): BigInt {
    let value = this.get("lockTimestamp");
    return value.toBigInt();
  }

  set lockTimestamp(value: BigInt) {
    this.set("lockTimestamp", Value.fromBigInt(value));
  }

  get periodDuration(): BigInt {
    let value = this.get("periodDuration");
    return value.toBigInt();
  }

  set periodDuration(value: BigInt) {
    this.set("periodDuration", Value.fromBigInt(value));
  }
}
