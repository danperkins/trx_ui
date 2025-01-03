import { Box } from "@chakra-ui/react";
import { Greeting } from "./components/Greeting";
import { WidgetPanel } from "./components/WidgetPanel";
import { WidgetHeader } from "./components/WidgetHeader";
import {
  TransactionPanel,
  TransactionPanelSkeleton,
} from "./components/TransactionPanel/TransactionPanel";
import { useState, useEffect } from "react";
import { sleep } from "../../utils";
import { GreetingSkeleton } from "./components/GreetingSkeleton";

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sleep(1000 + Math.random() * 2000).then(() => setIsLoading(false));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      base={{ padding: 5 }}
      lg={{ padding: 6, paddingTop: 12 }}
      gap={{ base: 4, lg: 3 }}
      height="100vh"
      overflow="hidden"
    >
      <Box
        data-testid="widgets"
        flexGrow="0"
        display="grid"
        gridTemplateColumns="1fr"
        lg={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}
      >
        <WidgetHeader>
          {isLoading ? <GreetingSkeleton /> : <Greeting />}
        </WidgetHeader>
        <WidgetHeader display={{ base: "none", lg: "block" }} />
        <WidgetHeader display={{ base: "none", lg: "block" }} />
      </Box>
      <Box
        display="grid"
        flexGrow="1"
        gridTemplateColumns="1fr"
        lg={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}
        overflow="hidden"
      >
        <WidgetPanel display={{ base: "none", lg: "flex" }}></WidgetPanel>
        {isLoading ? <TransactionPanelSkeleton /> : <TransactionPanel />}
        <WidgetPanel display={{ base: "none", lg: "flex" }}></WidgetPanel>
      </Box>
    </Box>
  );
}
