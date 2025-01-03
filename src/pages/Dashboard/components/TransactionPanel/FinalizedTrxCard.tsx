import { FinalizedTransaction } from "../../../../types";
import { TrxParties } from "./TrxParties";
import { Box, Text } from "@chakra-ui/react";
import { TrxSender } from "./TrxSender";

export function FinalizedTrxCard({ trx }: { trx: FinalizedTransaction }) {
  const statusStyle =
    trx.status === "Approved"
      ? {
          backgroundColor: "{colors.sky.50}",
          color: "{colors.sky.900}",
        }
      : trx.status === "Rejected"
        ? {
            backgroundColor: "{colors.orange.50}",
            color: "{colors.orange.500}",
          }
        : {
            backgroundColor: "{colors.sand.200}",
            color: "{colors.sand.950}",
          };
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
      <Box display="flex" justifyContent="space-between">
        <TrxParties trx={trx} />
        <Text
          textStyle="sm"
          padding="4px 12px 4px 12px"
          borderRadius={16}
          {...statusStyle}
        >
          {trx.status}
        </Text>
      </Box>
      <TrxSender trx={trx} boxProps={{ paddingTop: 2, paddingBottom: 0 }} />
    </Box>
  );
}
