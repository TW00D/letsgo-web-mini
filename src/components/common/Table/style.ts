import styled from "styled-components";

export const ConfirmListContainer = styled.div`
  width: 100%;
  max-width: 40%;
  background-color: #fff;
  margin-top: 2%;
`;

export const ConfirmImageWrap = styled.div`
  display: flex;
  width: 100px;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const ConfirmListHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 3px solid #636363;
  border-bottom: 3px solid #636363;
`;

export const ConfirmListItemContaienr = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  border-bottom: 1px solid #F1F1F3;
  &:hover {
    background-color: #fff;
  }
`;

export const ConfirmListItem = styled.div`
  width: 10%;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const ConfirmSubTitle = styled.div`
  font-size: 12px;
  font-family: 'Pretnedard';
  font-weight: 200;
  color: #8D8CA0;

  margin-top: 10px;

  img {
    width: 10px;
  }
`