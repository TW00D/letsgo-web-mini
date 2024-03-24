import * as S from "./style";
import Mic from "../../../../assets/img/microphone.svg";
import heart from "../../../../assets/img/heart.svg";
import view from "../../../../assets/img/view.svg";
import comment from "../../../../assets/img/comment.svg";

const STATE_ITEM = [
  {
    icon: heart,
    title: "heart",
    data: 20,
  },
  {
    icon: comment,
    title: "comment",
    data: 20,
  },
  {
    icon: view,
    title: "view",
    data: 20,
  },
];

const SchoolNews = () => {
  return (
    <S.SchoolnewsContainer>
      <S.SchoolnewsTitleWraper>
        <S.SchoolnewsTitleIcon src={Mic}></S.SchoolnewsTitleIcon>
        <S.SchoolnewsTitle>대신 전해드립니다</S.SchoolnewsTitle>
        <S.SchoolnewsTime>1분</S.SchoolnewsTime>
      </S.SchoolnewsTitleWraper>
      <S.SchoolnewsContent>
        인공과 3학년 선배중에 농구 잘하는 선배 있나요? 저번주에 농구하는거
        봤는데 잘생겼다고 전해주세요ㅠㅠ
      </S.SchoolnewsContent>
      <S.SchoolnewsStateWraper>
        {STATE_ITEM.map((item) => {
          return (
            <S.SchoolnewsStateBox key={item.icon}>
              <S.SchoolnewsStateIcon src={item.icon} alt={item.title} />
              {item.data}
            </S.SchoolnewsStateBox>
          );
        })}
        <S.SchoolnewsPlus>더보기</S.SchoolnewsPlus>
      </S.SchoolnewsStateWraper>
    </S.SchoolnewsContainer>
  );
};

export default SchoolNews;
