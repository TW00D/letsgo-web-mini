import * as S from "./style";
import logo from "../../../../assets/logo.jpg";
import highschool from "../../../../assets/highschool_logo.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Signupdata = {
  id: string;
  pw: string;
};

const SignupSecond = () => {
  const [signupData, setSignupData] = useState<Signupdata>({
    id: "",
    pw: "",
  });

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updateData = {
      ...signupData,
      [name]: value,
    };

    setSignupData(updateData);
  };

  const notify = () => {
    if (!signupData.id) {
      toast("아이디를 입력해주세요");
    } else if (!signupData.pw) {
      toast("비밀번호를 입력해주세요");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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