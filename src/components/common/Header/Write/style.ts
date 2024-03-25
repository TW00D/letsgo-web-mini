import styled from "styled-components";

export const WriteContainter = styled.div`
  width: 14%;
  display: flex;
  align-items: center;
  margin-left: 2%;
`;

export const WriteWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex; 
  justify-content: center;
  align-items: center;
  color: transparent;
  border-radius: 25px;
  border: 1px solid #7945ec;
  margin-left: 2%;

  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    background-image: linear-gradient(to right, #db00ff, #7945ec);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

