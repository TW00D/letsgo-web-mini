import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { useEffect } from "react";
import GlobalStyle from "./style/GlobalStyle";

const queryClient = new QueryClient();

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Toaster />
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;