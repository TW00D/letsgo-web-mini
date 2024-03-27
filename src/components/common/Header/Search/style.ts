import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 41.5%;
  margin-left: 2%;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #f1f1f3;
  padding-left: 10px;

  cursor: text;

  img {
    width: 17px;
    margin-left: 10px;
    
    cursor: pointer;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    color: #9F9FAF;
    margin-left: 7%;
  }

  input {
    border: none; 
    outline: none;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    color: #9f9faf;
    margin-left: 7%;
  }
`;
