import { Skeleton } from "@chakra-ui/react";

export function TrxSkeleton() {
  return (
    <Skeleton
      height={{ base: "84px", xl: "92px" }}
      width="100%"
      backgroundColor="{colors.sand.200}"
      borderRadius={12}
    />
  );
}
