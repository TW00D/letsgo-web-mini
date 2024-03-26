import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import SignupFirstPage from "../pages/Signup/first";
import SignupSecondPage from "../pages/Signup/second";
import PostDetail from "../components/common/Table/Detail";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupFirstPage />} path="/Signup" />
      <Route element={<SignupSecondPage />} path="/SignupSecond" />
      <Route element={<PostDetail />} path="/detail" />
    </Routes>
  );
};

export default Router;
