import { useState } from "react";
import { WidgetPanel } from "../WidgetPanel";
import {
  TransactionPanelHeader,
  TransactionPanelHeaderSkeleton,
} from "./TransactionPanelHeader";
import { TransactionStatus } from "./constants";
import { TransactionList, TransactionListSkeleton } from "./TransactionList";

export function TransactionPanel() {
  const [selectedStatus, setSelectedStatus] =
    useState<TransactionStatus>("Pending");
  return (
    <WidgetPanel gap={{ base: 6, lg: 11 }}>
      <TransactionPanelHeader
        selectedStatus={selectedStatus}
        onSelectedStatusChange={setSelectedStatus}
      />
      <TransactionList selectedStatus={selectedStatus} />
    </WidgetPanel>
  );
}

export function TransactionPanelSkeleton() {
  return (
    <WidgetPanel gap={{ base: 6, lg: 11 }}>
      <TransactionPanelHeaderSkeleton />
      <TransactionListSkeleton />
    </WidgetPanel>
  );
}
