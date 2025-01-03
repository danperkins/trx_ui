import { sleep } from "../../../../utils";
import { TransactionStatus } from "./constants";
import { getMockPendingTransactions } from "../../../../mocks/transactions";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@chakra-ui/react";
import { PendingTrxCard } from "./PendingTrxCard";

function TransactionHistoryList() {
  return null;
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
