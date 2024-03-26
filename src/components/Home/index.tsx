import Nav from "../common/Nav";
import SchoolWidget from "../common/SchoolWidget";
import banner from "../../assets/banner.svg";
import * as h from "./style"
import { Header } from "../common/Header";
import Table from "../common/Table";

const Home = () => {
    return (
        <h.HomeContainer>
          <Nav />
          <h.HomeTopWrap>
            <img src={banner} alt="배너입니다." />
            <Header />
            <Table />
          </h.HomeTopWrap>
        </h.HomeContainer>
    )
}

export default Home;
