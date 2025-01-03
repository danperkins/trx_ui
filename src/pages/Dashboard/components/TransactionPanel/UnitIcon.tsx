import { Box } from "@chakra-ui/react";
import { Transaction } from "../../../../types";
import { BtcUnit } from "../../icons/BtcUnit";
import { OpUnit } from "../../icons/OpUnit";
import { AvaxUnit } from "../../icons/AvaxUnit";
import { StarkUnit } from "../../icons/StarkUnit";
import { SuiUnit } from "../../icons/SuiUnit";

function getInnerIcon(unit: string) {
  if (unit === "BTC") {
    return BtcUnit;
  }
  if (unit === "OP") {
    return OpUnit;
  }
  if (unit === "AVAX") {
    return AvaxUnit;
  }
  if (unit === "STR") {
    return StarkUnit;
  }
  if (unit === "SUI") {
    return SuiUnit;
  }

  return null;
}

export function UnitIcon({ trx }: { trx: Transaction }) {
  const Icon = getInnerIcon(trx.unit);

  return (
    <Box base={{ w: 4, h: 4 }} flexShrink={0}>
      {Icon ? <Icon /> : /* TODO: Placeholder */ null}
    </Box>
  );
}
