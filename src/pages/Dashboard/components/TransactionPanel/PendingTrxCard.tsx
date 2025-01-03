import { PendingTransaction } from "../../../../types";
import { TrxParties } from "./TrxParties";
import { Box, Span, Text } from "@chakra-ui/react";
import { formatDistanceToNowStrict } from "date-fns";
import { TrxSender } from "./TrxSender";

export function PendingTrxCard({ trx }: { trx: PendingTransaction }) {
  return (
    <Box
      padding={{
        base: "8px 12px 8px 12px",
        lg: "8px 20px 8px 20px",
        xl: "12px 20px 12px 20px",
      }}
      backgroundColor="white"
      boxShadow="0px 0px 4px 0px #E8DDD166"
      borderRadius={12}
      maxWidth="100%"
      overflow="hidden"
    >
      <TrxParties trx={trx} />
      <TrxSender trx={trx} />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          display="flex"
          alignItems="center"
          flexBasis={"60%"}
          flexShrink={0}
        >
          <Text textStyle="sm" color="{colors.charcoal.300}">
            <Span color="{colors.sky.600}">{trx.currentApprovals}</Span>/
            {trx.requiredApprovals}
          </Text>
          <Box
            aria-label="progress"
            display="flex"
            height={1}
            borderRadius={12}
            flexBasis="100%"
            flexShrink={0}
            paddingLeft="5px"
            gap="1px"
          >
            <Box
              flex={trx.currentApprovals}
              borderRadius={12}
              backgroundColor="{colors.sky.base}"
            />
            <Box
              flex={trx.requiredApprovals - trx.currentApprovals}
              borderRadius={12}
              backgroundColor="{colors.sand.200}"
            />
          </Box>
        </Box>
        <Box flexGrow={1} textAlign="right">
          <Text textStyle="sm" color="{colors.charcoal.300}">
            {formatDistanceToNowStrict(new Date(trx.createdTs))} ago
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
