import { Box, Skeleton, Text } from "@chakra-ui/react";
import { Transaction } from "../../icons/Transaction";
import { SegmentedControl } from "../SegmentedControl";
import { TransactionStatus } from "./constants";
import { SkeletonCircle } from "../../../../components/ui/skeleton";

export function TransactionPanelHeader({
  selectedStatus,
  onSelectedStatusChange,
}: {
  selectedStatus: TransactionStatus;
  onSelectedStatusChange: (status: TransactionStatus) => void;
}) {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box
        backgroundColor="{colors.sand.200}"
        borderRadius={"50%"}
        base={{ width: 8, height: 8 }}
        lg={{ width: 11, height: 11 }}
        xl={{ width: "60px", height: "60px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={0}
      >
        <Transaction />
      </Box>
      <Box flexGrow={1} textAlign="left" paddingLeft={{ base: "2", lg: "3" }}>
        <Text textStyle={{ base: "lg", xl: "xl" }} aria-label="panel heading">
          Transactions
        </Text>
      </Box>
      <Box flexGrow={0}>
        <SegmentedControl
          selectedValue={selectedStatus}
          items={["Pending", "History"]}
          onValueSelected={onSelectedStatusChange}
        />
      </Box>
    </Box>
  );
}

export function TransactionPanelHeaderSkeleton() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <SkeletonCircle
        size={{ base: 8, lg: 11, xl: "60px" }}
        backgroundColor="{colors.sand.200}"
      />
      <Skeleton
        height={{ base: 4, lg: 5 }}
        marginLeft={{ base: 2, lg: 4, xl: 3 }}
        width={{ base: "159px" }}
        backgroundColor="{colors.sand.200}"
        borderRadius={50}
      />
    </Box>
  );
}
