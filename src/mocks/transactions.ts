import { FinalizedTransaction, PendingTransaction } from "@/types";
import { subHours } from "date-fns";

function getRandomFromList<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

const finalizedStatuses: FinalizedTransaction["status"][] = [
  "Approved",
  "Rejected",
  "Submitted",
];

const trxUnits = ["BTC", "AVAX", "STR", "SUI", "OP"];

const chars =
  "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const randomChar = () => getRandomFromList(chars);

const getRandomAddr = () =>
  new Array(Math.floor(Math.random() * 12) + 36)
    .fill(0)
    .map(randomChar)
    .join("");

function getMockFinalizedTransaction(): FinalizedTransaction {
  return {
    id: getRandomAddr(),
    pending: false,
    status: getRandomFromList(finalizedStatuses),
    sender: getRandomAddr(),
    receiver: getRandomAddr(),
    value: Math.trunc(Math.random() * 1000),
    unit: getRandomFromList(trxUnits),
    createdTs: subHours(
      new Date(),
      Math.floor(Math.random() * 48),
    ).toISOString(),
  };
}

function getMockPendingTransaction(): PendingTransaction {
  const requiredApprovals = Math.floor(Math.random() * 7) + 1;
  const currentApprovals = Math.floor(Math.random() * (requiredApprovals - 1));
  return {
    id: getRandomAddr(),
    pending: true,
    sender: getRandomAddr(),
    receiver: getRandomAddr(),
    value: Math.trunc(Math.random() * 1000),
    unit: getRandomFromList(trxUnits),
    createdTs: subHours(
      new Date(),
      Math.floor(Math.random() * 48),
    ).toISOString(),
    requiredApprovals,
    currentApprovals,
  };
}

export function getMockFinalizedTransactions() {
  const trx: FinalizedTransaction[] = new Array(Math.floor(Math.random() * 15))
    .fill(null)
    .map(() => getMockFinalizedTransaction())
    .sort(
      (a, b) =>
        new Date(b.createdTs).valueOf() - new Date(a.createdTs).valueOf(),
    );
  return trx;
}

export function getMockPendingTransactions() {
  const trx: PendingTransaction[] = new Array(Math.floor(Math.random() * 15))
    .fill(null)
    .map(() => getMockPendingTransaction())
    .sort(
      (a, b) =>
        new Date(b.createdTs).valueOf() - new Date(a.createdTs).valueOf(),
    );
  return trx;
}
