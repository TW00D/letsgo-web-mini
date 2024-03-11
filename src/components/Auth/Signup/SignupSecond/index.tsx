import * as S from "./style";
import logo from "../../../../assets/logo.jpg";
import highschool from "../../../../assets/highschool_logo.jpg";

const SignupSecond = () => {
  return (
    <>
      <S.SignupContainer>
        <S.SignupWrapper>
          <S.SignupTopWraper>
            <img src={logo} width={50} height={50} alt="logo"></img>
            <S.SignupTitle>학생이신가요?</S.SignupTitle>
            <S.SignupSubtitle>
              가장 트렌디한 학생 커뮤니티, 레츠고입니다
            </S.SignupSubtitle>
          </S.SignupTopWraper>
          <S.SignupContentWraper>
            <img src={highschool} width={50} height={50} alt="highschool"></img>
            <S.SignupText>고등학생만 가능해요</S.SignupText>
            <S.SignupSubtext>
              *고등학생이 아닌 것이 추후 적발될 경우 예고 없이 <br /> 사용
              중지될 수 있으며 추가적인 불이익을 받을 수 있습니다.
            </S.SignupSubtext>
          </S.SignupContentWraper>
          <S.SignupActiveButton>핸드폰 본인 인증</S.SignupActiveButton>
        </S.SignupWrapper>
      </S.SignupContainer>
    </>
  );
};

export default SignupSecond;
