import Nav from "../common/Nav";
import banner from "../../assets/banner.svg";
import * as h from "./style"
import { Header } from "../common/Header";
import Table from "../common/Table";
import { Toggle } from "../common/Toggle";

const Home = () => {
    return (
        <h.HomeContainer>
          <Nav />
          <h.HomeTopWrap>
            <img src={banner} alt="배너입니다." />
            <Header />
            <Table />
            <Toggle />
          </h.HomeTopWrap>
        </h.HomeContainer>
    )
}

export default Home;