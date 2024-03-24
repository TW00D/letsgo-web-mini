import * as M from "./style";
import MealBg from "../../../../assets/img/Mealbg.svg";
const MealWidget = () => {
  return (
    <M.MealWidgetWraper>
      <M.MealWidgetimage src={MealBg} />
      <M.MealWidgetContents>
        <M.MealWidgetTitle>오늘의 중식</M.MealWidgetTitle>
        <M.MealWidgetMenu>
          쇠고기야채죽,*모닝빵크래미샌드위치,나박김치,허쉬초코크런치시리얼+우유,바나나
        </M.MealWidgetMenu>
      </M.MealWidgetContents>
    </M.MealWidgetWraper>
  );
};

export default MealWidget;
