import { Transaction } from "../../../../types";
import { Box, Text, Span } from "@chakra-ui/react";

export function TrxParties({ trx }: { trx: Transaction }) {
  return (
    <Box textAlign="left">
      <Text textStyle="md" color="{colors.charcoal.400}">
        Sent{" "}
        <Span color="{colors.charcoal.base}">
          {trx.value} {trx.unit}
        </Span>{" "}
        to{" "}
        <Span color="{colors.charcoal.base}">
          {trx.receiver.slice(0, 7)}..
          {trx.receiver.slice(trx.receiver.length - 2)}
        </Span>
      </Text>
    </Box>
  );
}
