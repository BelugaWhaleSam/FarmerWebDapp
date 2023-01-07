import { Routes, Route, Navigate } from "react-router-dom";
import { FDashboard, CDashboard, Auth } from "@/layouts";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

/* livepeer Client using our api key  */
const client = createReactClient({
  provider: studioProvider({ apiKey: "45087818-a31a-4541-9892-fe8e0a06145d" }),
});

function App() {
  return (
    <Routes>
      <Route path="/dashboardFarmer/*" element={<FDashboard />} />
      <Route
        path="/dashboardConsumer/*"
        element={
          <LivepeerConfig client={client}>
            <CDashboard />
          </LivepeerConfig>
        }
      />
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="*"
        element={<Navigate to="/dashboardFarmer/home" replace />}
      />
      <Route
        path="*"
        element={<Navigate to="/dashboardConsumer/home" replace />}
      />
    </Routes>
  );
}

export default App;
