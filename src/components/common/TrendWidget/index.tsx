import * as T from "./style";

const TrendWidget = () => {
  return (
    <>
      <T.TrendWidgetContainer>
        <T.TrendWidgetTitle>실시간 트렌드 차트</T.TrendWidgetTitle>
        <T.TrendButtonWraper>
          <T.TrendActiveButton>1~10위</T.TrendActiveButton>
          <T.TrendDisableButton>11~20위</T.TrendDisableButton>
        </T.TrendButtonWraper>
      </T.TrendWidgetContainer>
    </>
  );
};

export default TrendWidget;
