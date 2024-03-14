import toast from "react-hot-toast";
import Logo from "../../../assets/logo.jpg";
import * as l from "./style";
import { useLogin } from "../../../hooks/Auth/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, credentials } = useLogin();

  return (
    <>
      <l.LoginContainer>
        <l.LoginWrapper onSubmit={handleSubmit}>
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
              value={credentials.userId}
              onChange={handleChange}
            />
            <l.LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </l.InputContainer>
          <l.LoginButton type="submit">로그인</l.LoginButton>
          <l.LoginOppositePartWrap>
            <l.LoginOppositePartText>
              아직 레츠고 회원이 아니신가요?
            </l.LoginOppositePartText>
            <l.LoginOppositePartButton onClick={() => navigate("/Signup")}>
              회원가입
            </l.LoginOppositePartButton>
          </l.LoginOppositePartWrap>
        </l.LoginWrapper>
      </l.LoginContainer>
    </>
  );
};

export default Login;
