import { QueryClientProvider, QueryClient } from "react-query"
import { ThemeProvider } from "styled-components"
import { theme } from "./style/theme"
import { RecoilRoot } from "recoil"
import { Toaster } from "react-hot-toast"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"

const queryClient = new QueryClient

function App() { 
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route element={<MainPage />} path="/" />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
