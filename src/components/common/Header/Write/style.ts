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
  text-align: center;
  align-items: center;
  color: #d3d2da;
  border-radius: 25px;
  border: 2px solid transparent;
  background: linear-gradient(45deg, #db00ff, #7945ec) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; 
  mask-composite: exclude;
  margin-left: 2%;

  span {
    font-size: 14px;
    font-weight: 200;
    font-family: "Pretendard";
  }
`;
