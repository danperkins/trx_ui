import { Box } from "@chakra-ui/react";
import { Greeting } from "./components/Greeting";
import { WidgetPanel } from "./components/WidgetPanel";
import { WidgetHeader } from "./components/WidgetHeader";
import { TransactionPanel } from "./components/TransactionPanel/TransactionPanel";

export function Dashboard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      base={{ padding: 5 }}
      lg={{ padding: 6, paddingTop: 12 }}
      gap={{ base: 4, lg: 3 }}
    >
      <Box
        data-testid="widgets"
        flexGrow="0"
        display="grid"
        gridTemplateColumns="1fr"
        lg={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}
      >
        <WidgetHeader>
          <Greeting />
        </WidgetHeader>
        <WidgetHeader display={{ base: "none", lg: "block" }} />
        <WidgetHeader display={{ base: "none", lg: "block" }} />
      </Box>
      <Box
        display="grid"
        flexGrow="1"
        gridTemplateColumns="1fr"
        lg={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}
      >
        <WidgetPanel display={{ base: "none", lg: "flex" }}></WidgetPanel>
        <TransactionPanel />
        <WidgetPanel display={{ base: "none", lg: "flex" }}></WidgetPanel>
      </Box>
    </Box>
  );
}
