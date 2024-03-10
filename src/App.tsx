import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Toaster />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
