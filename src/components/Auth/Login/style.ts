import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-size: cover;
  background: #f6f6f6;
`;

export const LoginTopWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const LoginHeading = styled.h2`
  color: #000;
  font-size: 24px;
  align-items: center;
  margin-top: 2px;
`;

export const LoginSubHeading = styled.h2`
  color: #c70efd;
  font-size: 16px;
  text-align: center;
  margin-top: -10px;
  font-weight: 600;
`;

export const LoginWrapper = styled.form`
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
  box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
  background-color: #fff;
  width: 80%;
  max-width: 330px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: #0095f6;
  font-size: 14px;
  font-weight: bold;
  font-family: "Pretendard";
  color: #fff;
`;

export const LoginInput = styled.input`
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

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const LoginText = styled.label`
  font-size: 16px;
  font-family: "Pretendard";
`;

export const LoginOppositePartButton = styled.button`
  font-size: 14px;
  color: #c70efd;
  background: none;
  border: 0px;
  cursor: pointer;
  font-weight: 600;
`;

export const LoginOppositePartText = styled.p`
  color: #9f9faf;
  font-size: 14px;
  font-weight: 500;
`;

export const LoginOppositePartWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-top: -20px;
  align-items: center;
`;