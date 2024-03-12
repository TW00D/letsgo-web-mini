import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  width: 300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 90px;
  align-items: center;

  background-color: #fff;
  color: #f6f6f6;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavTopWrap = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 56px;
  text-align: center;
`;

export const NavTitle = styled.img`
  cursor: pointer;
  margin-right: 65px;
  object-fit: scale-down;
`;

export const NavMidWrap = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  row-gap: 25px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
  color: #bdbdc8;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const NavCategoryBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  column-gap: 14px;
  cursor: pointer;
`;
