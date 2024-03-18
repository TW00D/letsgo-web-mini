import * as N from "./style";
import Avatar from "../../../../../assets/img/ProfileImage.svg";
const NavAvatar = () => {
  return (
    <N.AvatarWraper>
      <N.NavAvatarTag>
        <N.NavAvatarTagText>#즐겁다</N.NavAvatarTagText>
      </N.NavAvatarTag>
      <N.NavAvatarWraper>
        <N.NavAvatarImg src={Avatar}></N.NavAvatarImg>
      </N.NavAvatarWraper>
      <N.NavTextWraper>
        <N.NavName>김예림</N.NavName>
        <N.NavSchoolname>대구소프트웨어마이스터고</N.NavSchoolname>
        <N.NavIntroduction>안녕하세요 김예림입니다 ✨</N.NavIntroduction>
      </N.NavTextWraper>
    </N.AvatarWraper>
  );
};

export default NavAvatar;
