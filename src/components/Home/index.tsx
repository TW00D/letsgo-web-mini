import Nav from "../common/Nav";
import SchoolWidget from "../common/SchoolWidget";
import * as h from "./style";

const Home = () => {
  return (
    <h.HomeContainer>
      <Nav />
      <SchoolWidget></SchoolWidget>
    </h.HomeContainer>
  );
};

export default Home;
