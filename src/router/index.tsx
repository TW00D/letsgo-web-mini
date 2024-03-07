import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/Login";
import SignupFirstPage from "../pages/Signup/first";
import SignupSecondPage from "../pages/Signup/second";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupFirstPage />} path="/Signup" />
      <Route element={<SignupSecondPage />} path="/SignupSecond" />
    </Routes>
  );
};

export default Router;
