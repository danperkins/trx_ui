import { sleep } from "../../../../utils";
import { TransactionStatus } from "./constants";
import {
  getMockFinalizedTransactions,
  getMockPendingTransactions,
} from "../../../../mocks/transactions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Box } from "@chakra-ui/react";
import { PendingTrxCard } from "./PendingTrxCard";
import { FinalizedTrxCard } from "./FinalizedTrxCard";
import { Suspense } from "react";

function TransactionHistoryList() {
  const query = useSuspenseQuery({
    queryKey: ["finalizedTransactions"],
    queryFn: async () => {
      await sleep(Math.random() * 4000);
      return getMockFinalizedTransactions();
    },
  });

  // TODO: handle error status
  if (query.status !== "success") {
    throw new Error("Loading");
  }

  return (
    <Box display="grid" gridTemplateColumns={"1fr"} gap={2}>
      {query.data.map((d) => (
        <FinalizedTrxCard trx={d} key={d.id} />
      ))}
    </Box>
  );
}

function PendingTransactionList() {
  const query = useSuspenseQuery({
    queryKey: ["pendingTransactions"],
    queryFn: async () => {
      await sleep(Math.random() * 4000);
      return getMockPendingTransactions();
    },
  });

  // TODO: handle error status
  if (query.status !== "success") {
    throw new Error("Loading");
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
  return (
    <Suspense fallback={<div>Loading</div>}>
      {selectedStatus === "Pending" ? (
        <PendingTransactionList />
      ) : (
        <TransactionHistoryList />
      )}
    </Suspense>
  );
}
