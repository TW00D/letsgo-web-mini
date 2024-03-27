import Nav from "../../Nav";
import Banner from "../../../../assets/banner.svg";
import * as d from "./style";
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
        <d.PostTopWrap>
          <d.PostTitle>홍대에서 페이커 만남 ㄹㅇ.jpg</d.PostTitle>
          <d.PostBottomTitleWrap>
            <d.PostLeftTitle>게임</d.PostLeftTitle>
            <d.PostLeftTitle>1일진</d.PostLeftTitle>
            <d.PostLeftTitle>대구소프트웨어마이스터고 3학년 여학생</d.PostLeftTitle>
            <d.PostRightTitle>조회수</d.PostRightTitle>
            <d.PostRightTitle>댓글</d.PostRightTitle>
            <d.PostRightTitle>좋아요</d.PostRightTitle>
          </d.PostBottomTitleWrap>
        </d.PostTopWrap>
      </d.PostWrap>
    </d.DetailContainer>
  );
};

export default PostDetail;
