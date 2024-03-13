import Header from "../common/Header";
import banner from "../../assets/banner.png";
import Nav from "../common/Nav";
import * as h from "./style";

const Home = () => {
  return (
    <h.HomeContainer>
      <Nav />
      <h.HomeTopWrap>
        <img src={banner} alt="배너입니다" />
        <Header />
      </h.HomeTopWrap>
    </h.HomeContainer>
  );
};

export default Home;
