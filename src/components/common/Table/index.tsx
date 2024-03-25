import React from "react";
import * as S from "./style";
import Test from "../../../assets/test.svg";

const Table: React.FC = () => {
  const items = [
    { id: 1, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 2, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 3, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 4, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 5, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 6, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 7, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
  ];

  return (
    <S.ConfirmListContainer>
      {items.map((item) => (
        <S.ConfirmListItemContaienr key={item.id}>
          <S.ConfirmImageWrap>
            <img src={Test} alt="test" />
          </S.ConfirmImageWrap>
          <S.ConfirmListItem style={{ width: "30%", paddingLeft: "1%" }}>
            {item.title}
            <S.ConfirmSubTitle>
              <span>통합</span>
              <span> | </span>
              <span>선화예술고등학교 3학년</span>
            </S.ConfirmSubTitle>
          </S.ConfirmListItem>
        </S.ConfirmListItemContaienr>
      ))}
    </S.ConfirmListContainer>
  );
};

export default Table;
