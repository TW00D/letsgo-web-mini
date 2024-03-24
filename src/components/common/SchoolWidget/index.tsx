import MealWidget from "./Meal";
import * as S from "./style";
const SchoolWidget = () => {
  return (
    <>
      <S.SchoolWidgetContainer>
        <S.SchoolWidgetTitle>지금 우리 학교는?</S.SchoolWidgetTitle>
        <MealWidget />
      </S.SchoolWidgetContainer>
    </>
  );
};

export default SchoolWidget;
