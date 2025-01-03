import { useState } from "react";
import { WidgetPanel } from "../WidgetPanel";
import { TransactionPanelHeader } from "./TransactionPanelHeader";
import { TransactionStatus } from "./constants";

export function TransactionPanel() {
  const [selectedStatus, setSelectedStatus] =
    useState<TransactionStatus>("Pending");
  return (
    <WidgetPanel gap={{ base: 6, lg: 11 }}>
      <TransactionPanelHeader
        selectedStatus={selectedStatus}
        onSelectedStatusChange={setSelectedStatus}
      />
    </WidgetPanel>
  );
}
