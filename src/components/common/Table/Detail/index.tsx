import Nav from "../../Nav"
import Banner from "../../../../assets/banner.svg";
import * as d from "./style"
import { Header } from "../../Header";

const PostDetail = () => {
    return (
        <d.DetailContainer>
            <Nav />
            <d.DetailTopWrap>
              <img src={Banner} alt="배너입니다." />
              <Header />
            </d.DetailTopWrap>
            <d.PostWrap>
                <d.PostWrapContainer>
                </d.PostWrapContainer>
            </d.PostWrap>
        </d.DetailContainer>
    )
}

export default PostDetail;
