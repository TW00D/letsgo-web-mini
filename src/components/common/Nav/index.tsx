import * as n from "./style";
import Hlogo from "../../../assets/hlogo.svg";
import { useNavigate } from "react-router-dom";
import { NAV_ITEM } from "./constant";
import NavProfile from "./NavProfile";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <n.NavContainer>
            <n.NavTopWrap>
                <n.NavTitle src={Hlogo} />
            </n.NavTopWrap>
            <NavProfile />
            <n.NavMidWrap>
                {NAV_ITEM.map((item) => {
                    return (
                        <n.NavCategoryBox
                          key={item.link}
                          onClick={() => navigate(item.link)}
                        >
                            <img src={item.icon} alt={item.title} />
                            {item.title}
                        </n.NavCategoryBox>
                    );
                })}
            </n.NavMidWrap>
        </n.NavContainer>
    )
}

export default Nav;