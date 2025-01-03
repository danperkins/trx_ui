import { Box, BoxProps, Text } from "@chakra-ui/react";
import { Transaction } from "../../../../types";
import { UnitIcon } from "./UnitIcon";

export function TrxSender({
  trx,
  boxProps,
}: {
  trx: Transaction;
  boxProps?: BoxProps;
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingTop={1}
      paddingBottom={3}
      {...boxProps}
    >
      <UnitIcon trx={trx} />
      <Text
        flexShrink={1}
        textStyle={{ base: "sm" }}
        pl={1}
        whiteSpace={"nowrap"}
        textOverflow={"ellipsis"}
        overflow="hidden"
        color="{colors.charcoal.300}"
      >
        {trx.sender}
      </Text>
    </Box>
  );
}
