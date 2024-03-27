import * as S from "./style";
import logo from "../../../../assets/logo.jpg";
import "react-toastify/dist/ReactToastify.css";
import { useRegister } from "../../../../hooks/Auth/useRegister";

const SignupFirst = () => {
  const { registerData, handleChange, handleSubmit } = useRegister();

  return (
    <>
      <S.SignupContainer>
        <S.SignupWrapper onSubmit={handleSubmit}>
          <S.SignupTopWraper> 
            <img src={logo} width={50} height={50} alt="logo" />
            <S.SignupTitle>만나서 반가워요</S.SignupTitle>
            <S.SignupSubtitle>
              가장 트렌디한 학생 커뮤니티, 레츠고입니다
            </S.SignupSubtitle>
          </S.SignupTopWraper>
          <S.SignupInputWraper>
            <S.SignupInput
              type="text"
              placeholder="아이디를 입력해주세요"
              name="username"
              value={registerData?.username}
              onChange={handleChange}
            />
            <S.SignupInput
              type="text"
              placeholder="닉네임을 입력해주세요"
              name="text"
              value={registerData?.password}
              onChange={handleChange}
            />
            <S.SignupInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={registerData?.password}
              onChange={handleChange}
            />
            {registerData.username && registerData.password ? (
              <S.SignupActiveButton>회원가입</S.SignupActiveButton>
            ) : (
              <S.SignupPassiveButton
                type={"submit"}
                disabled={true}
              >
                회원가입
              </S.SignupPassiveButton>
            )}
          </S.SignupInputWraper>
        </S.SignupWrapper>
      </S.SignupContainer>
    </>
  );
};

export default SignupFirst;
