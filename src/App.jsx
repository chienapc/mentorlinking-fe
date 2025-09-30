import { MantineProvider} from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import { RouterProvider } from "react-router-dom";
import { NavigationProgress } from "@mantine/nprogress";
import routes from "./routes";
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <NavigationProgress />
          <Notifications />
          <DatesProvider
            settings={{
              locale: "vn",
              firstDayOfWeek: 1,
              timezone: "Asia/Ho_Chi_Minh",
            }}
          >
            <RouterProvider router={routes} />
          </DatesProvider>
        </MantineProvider>
      </QueryClientProvider>
  );
}

export default App;
