import styled from "styled-components";

export const SchoolnewsContainer = styled.div`
  width: 240px;
  height: 120px;
  background-color: #f8f8f8;
  border-color: #ededed;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  padding: 5%;
  box-sizing: border-box;
`;

export const SchoolnewsTitleWraper = styled.div`
  display: flex;
  align-items: center;
`;

export const SchoolnewsTitleIcon = styled.img`
  font-family: "pretendard";
  font-weight: 600;
  font-size: 1em;
  color: #2f2f39;
`;
export const SchoolnewsTitle = styled.div`
  font-family: "pretendard";
  font-weight: 600;
  font-size: 0.8em;
  color: #2f2f39;
  margin-right: auto;
  letter-spacing: -0.5px;
`;

export const SchoolnewsTime = styled.div`
  font-family: "pretendard";
  font-weight: 400;
  font-size: 0.8em;
  color: #9f9faf;
`;

export const SchoolnewsContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: -0.5px;
  white-space: normal;
  line-height: 140%;
  font-family: "pretendard";
  font-weight: 500;
  font-size: 0.8em;
  color: #2f2f39;

  margin: 5% 0%;
  padding: 0% 2%;

  text-overflow: ellipsis;
  overflow: hidden;
`;
export const SchoolnewsStateWraper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5%;
  padding-left: 2%;
`;

export const SchoolnewsStateBox = styled.div`
  display: flex;
  font-family: "pretendard";
  font-size: 0.8em;
  column-gap: 5%;
`;

export const SchoolnewsPlus = styled.div`
  font-family: "pretendard";
  font-weight: 400;
  font-size: 0.8em;
  color: #9f9faf;
  margin-left: auto;
`;

export const SchoolnewsStateIcon = styled.img``;
