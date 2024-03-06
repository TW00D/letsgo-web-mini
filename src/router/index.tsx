import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/Login";

const Router = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
        </Routes>
    )
}

export default Router;