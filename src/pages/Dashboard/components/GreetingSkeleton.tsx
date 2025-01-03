import { Box, Skeleton } from "@chakra-ui/react";

export function GreetingSkeleton() {
  return (
    <Box display="grid" padding={{ base: "8px 0 8px 0", lg: "12px 0 12px 0" }}>
      <Skeleton
        height={{ base: 5, lg: 11 }}
        width={{ base: "177px", lg: "333px" }}
        backgroundColor="white"
      />
      <Skeleton
        height={{ base: 5, lg: 11 }}
        width={{ base: "135px", lg: "222px" }}
        backgroundColor="white"
        marginTop={{ base: 2, lg: 2.5 }}
      />
    </Box>
  );
}
