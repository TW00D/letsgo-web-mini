import * as S from "./style";
import logo from "../../../../assets/logo.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
type Signupdata = {
  id: string;
  pw: string;
};

const SignupFirst = () => {
  const [signupData, setSignupData] = useState<Signupdata>({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();

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
      toast.error("아이디를 입력해주세요");
    } else if (!signupData.pw) {
      toast.error("비밀번호를 입력해주세요");
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate("/SignupSecond");
  };

  return (
    <>
      <S.SignupContainer>
        <S.SignupWrapper onSubmit={onSubmit}>
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
              name="id"
              value={signupData?.id}
              onChange={onChangeData}
            />
            <S.SignupInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="pw"
              value={signupData?.pw}
              onChange={onChangeData}
            />
            {signupData.id && signupData.pw ? (
              <S.SignupActiveButton>회원가입</S.SignupActiveButton>
            ) : (
              <S.SignupPassiveButton
                type={"submit"}
                onClick={() => {
                  notify;
                }}
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
