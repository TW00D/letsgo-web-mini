import styled from "styled-components";

export const NavContainer = styled.div`
  width: 80%;
  height: 100px;

  border-color: #f1f1f1;
  border-style: solid;
  border-width: 2px;
  border-left: 0px;
  border-right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 20%;
`;

export const NavWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const NavScoreTitle = styled.h4`
  color: #bdbdc8;
  font-family: "pretendard";
  font-weight: 400;
  font-size: 0.8em;
`;

export const NavScoreNumber = styled.h4`
  color: black;
  font-family: "pretendard";
  font-weight: 800;
`;
