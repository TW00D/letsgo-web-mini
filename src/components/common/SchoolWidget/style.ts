import styled from "styled-components";

export const SchoolWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 280px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.01);
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const SchoolWidgetTitle = styled.h2`
  background-image: linear-gradient(to right, #db00ff, #455cec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.2em;
  font-weight: 700;
  font-family: "Pretendard";
  letter-spacing: -1px;
`;
