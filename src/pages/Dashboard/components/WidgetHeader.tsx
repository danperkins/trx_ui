import { Box, BoxProps } from "@chakra-ui/react";

export function WidgetHeader(props: BoxProps) {
  return (
    <Box
      base={{
        padding: 3,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
      }}
      lg={{
        padding: 6,
        height: "224px",
      }}
      xl={{
        height: "248px",
      }}
      {...props}
    ></Box>
  );
}
