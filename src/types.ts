export type TransactionUnit = "BTC" | "AVAX" | "STR" | "SUI" | "OP";

type BaseTransaction = {
  id: string;
  pending: boolean;
  sender: string;
  receiver: string;
  value: number;
  unit: string;
  createdTs: string;
};

export type FinalizedTransaction = BaseTransaction & {
  pending: false;
  status: "Approved" | "Rejected" | "Submitted";
};

export type PendingTransaction = BaseTransaction & {
  pending: true;
  requiredApprovals: number;
  currentApprovals: number;
};

export type Transaction = PendingTransaction | FinalizedTransaction;
