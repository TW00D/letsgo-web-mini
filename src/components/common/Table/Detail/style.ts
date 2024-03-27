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
  height: 150%;
  background-color: #fff;
  margin-top: 2%;

  overflow: auto;
`;

export const PostWrapContainer = styled.div`
  height: 100%;
`;
