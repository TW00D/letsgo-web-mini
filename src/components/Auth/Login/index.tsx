import * as l from "./style";
import Logo from "../../../assets/logo.jpg";

const Login = () => {
  return (
    <l.LoginContainer>
      <l.LoginWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          />
          <l.LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
          />
        </l.InputContainer>
        <l.LoginButton>로그인</l.LoginButton>
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
          <l.LoginOppositePartButton>회원가입</l.LoginOppositePartButton>
        </l.LoginOppositePartWrap>
      </l.LoginWrapper>
    </l.LoginContainer>
  );
};

export default Login;
