import Nav from "../../Nav"
import Banner from "../../../../assets/banner.svg";
import * as d from "./style"
import { Header } from "../../Header";
import SchoolWidget from "../../SchoolWidget";

const PostDetail = () => {
    return (
        <d.DetailContainer>
            <Nav />
            <d.DetailTopWrap>
            <img src={Banner} alt="배너입니다." />
            <Header />
            </d.DetailTopWrap>
        </d.DetailContainer>
    )
}

export default PostDetail;