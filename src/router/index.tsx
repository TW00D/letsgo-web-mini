import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export default Router;
