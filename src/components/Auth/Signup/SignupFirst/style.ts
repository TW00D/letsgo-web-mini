import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const SignupWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 60px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  box-shadow: 0px 0px 50px rgba(33, 33, 33, 0.05);
  background-color: #fff;
  width: 80%;
  max-width: 330px;
`;

export const SignupTopWraper = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const SignupTitle = styled.h2`
  color: #000;
  font-size: 24px;
  align-items: center;
  font-family: "Pretendard";
`;

export const SignupSubtitle = styled.h2`
  background-image: linear-gradient(to right, #db00ff, #455cec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  font-family: "Pretendard";
`;

export const SignupInputWraper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 10px;
`;

export const SignupInput = styled.input`
  width: 96%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  border: 1px solid #bdbdc8;
  padding-left: 13px;

  &::placeholder {
    font-size: 16px;
    font-family: "Pretendard";
    color: #a6a6a6;
  }
`;

export const SignupActiveButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 60px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 600;
  color: #fff;
  background-color: #db00ff;
  cursor: pointer;
`;

export const SignupPassiveButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 60px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 600;
  color: #fff;
  background-color: #db00ff50;
`;
