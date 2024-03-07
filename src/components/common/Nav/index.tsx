import * as n from "./style";
import Hlogo from "../../../assets/hlogo.svg"
import { useNavigate } from "react-router-dom";
import { NAV_ITEM } from "./constant";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <n.NavCategoryBox>
            <n.NavTopWrap>
                <n.NavTitle src={Hlogo} />
            </n.NavTopWrap>
            <n.NavMidWrap>
            </n.NavMidWrap>
            <n.NavMidWrap>
                {NAV_ITEM.map((item) => {
                    return (
                        <n.NavCategoryBox
                          key={item.link}
                          onClick={() => navigate(item.link)}
                         >
                            {item.title}
                         </n.NavCategoryBox>
                    );
                })}
            </n.NavMidWrap>
        </n.NavCategoryBox>
    )
}

export default Nav;