import { Box, BoxProps } from "@chakra-ui/react";

export function WidgetPanel(props: BoxProps) {
  return (
    <Box
      background="{colors.sand.50}"
      boxShadow="0px 0px 8px 0px #E8DDD166"
      {...props}
      base={{
        borderRadius: "16px",
        padding: 2,
      }}
      lg={{
        borderRadius: "20px",
        padding: 6,
      }}
    ></Box>
  );
}
