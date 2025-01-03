import { sleep } from "../../../../utils";
import { TransactionStatus } from "./constants";
import {
  getMockFinalizedTransactions,
  getMockPendingTransactions,
} from "../../../../mocks/transactions";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@chakra-ui/react";
import { PendingTrxCard } from "./PendingTrxCard";
import { FinalizedTrxCard } from "./FinalizedTrxCard";

function TransactionHistoryList() {
  const query = useQuery({
    queryKey: ["finalizedTransactions"],
    queryFn: async () => {
      await sleep(Math.random() * 4000);
      return getMockFinalizedTransactions();
    },
  });

  // TODO: handle error status
  if (query.status !== "success") {
    return query.status;
  }

  return (
    <Box display="grid" gridTemplateColumns={"1fr"} gap={2}>
      {query.data.map((d) => (
        <FinalizedTrxCard trx={d} key={d.id} />
      ))}
    </Box>
  );
}

export function PendingTransactionList() {
  const query = useQuery({
    queryKey: ["pendingTransactions"],
    queryFn: async () => {
      await sleep(Math.random() * 4000);
      return getMockPendingTransactions();
    },
  });

  // TODO: handle error status
  if (query.status !== "success") {
    return query.status;
  }

  return (
    <Box display="grid" gridTemplateColumns={"1fr"} gap={2}>
      {query.data.map((d) => (
        <PendingTrxCard trx={d} key={d.id} />
      ))}
    </Box>
  );
}

export function TransactionList({
  selectedStatus,
}: {
  selectedStatus: TransactionStatus;
}) {
  return selectedStatus === "Pending" ? (
    <PendingTransactionList />
  ) : (
    <TransactionHistoryList />
  );
}
