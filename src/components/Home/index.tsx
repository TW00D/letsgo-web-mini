import Nav from "../common/Nav";
import SchoolWidget from "../common/SchoolWidget";
import TrendWidget from "../common/TrendWidget";
import * as h from "./style";

const Home = () => {
  return (
    <h.HomeContainer>
      <Nav />
      <h.WidgetWraper>
        <SchoolWidget></SchoolWidget>
        <TrendWidget></TrendWidget>
      </h.WidgetWraper>
    </h.HomeContainer>
  );
};

export default Home;
