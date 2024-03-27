import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
`;

export const DetailTopWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const PostWrap = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fff;
  margin-top: 2%;
  padding-left: 1%;

  overflow: auto;
`;

export const PostBottomTitleWrap = styled.div`
  display: flex;
  margin-top: 2%;
`

export const PostTopWrap = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f1f1f3;
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 400;
  color: #000;

  margin-top: 3%;
`;

export const PostLeftTitle = styled.h3`
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
  color: #706f88;
  
  margin-right: 2%;
`;

export const PostRightTitle = styled.h3`
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
  color: #706f88;
`;
