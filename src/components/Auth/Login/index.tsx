import * as l from "./style";
import Logo from "../../../assets/logo.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    const { userId, password } = loginData;
    if (userId === "" || password === "") {
      toast.error("아이디와 비밀번호를 입력해주세요.");
    } else {
      toast.success("로그인 성공!");
      navigate("/");
    }
  };

  return (
    <l.LoginContainer>
      <l.LoginWrapper onSubmit={handleLogin}>
        <l.LoginTopWrap>
          <img src={Logo} width={50} height={50} alt="logo" />
          <l.LoginHeading>환영합니다</l.LoginHeading>
          <l.LoginSubHeading>
            가장 트렌디한 학생 커뮤니티, 레츠고입니다
          </l.LoginSubHeading>
        </l.LoginTopWrap>
        <l.InputContainer>
          <l.LoginInput
            type="text"
            placeholder="아이디를 입력해주세요"
            name="userId"
            value={loginData.userId}
            onChange={handleInputChange}
          />
          <l.LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </l.InputContainer>
        <l.LoginButton type="submit">로그인</l.LoginButton>
        <l.LoginOppositePartWrap
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <l.LoginOppositePartText>
            아직 레츠고 회원이 아니신가요?
          </l.LoginOppositePartText>
          <l.LoginOppositePartButton onClick={() => navigate("Signup")}>
            회원가입
          </l.LoginOppositePartButton>
        </l.LoginOppositePartWrap>
      </l.LoginWrapper>
    </l.LoginContainer>
  );
};

export default Login;
