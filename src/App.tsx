import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { useState } from "react";

const getQueryClient = () => new QueryClient();

function App() {
  const [queryClient] = useState(getQueryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
