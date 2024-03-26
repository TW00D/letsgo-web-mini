import * as n from "./style";
import Hlogo from "../../../assets/hlogo.svg";
import Select from "../../../assets/select.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEM } from "./constant";
import NavProfile from "./NavProfile";

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
              isMatch={pathname === item.link ? true : false}
              key={item.link}
              onClick={() => navigate(item.link)}
            >
              {pathname === item.link ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <img height={40} src={Select} alt="err" />
                </span>
              ) : null}
              <img src={item.icon} alt={item.title} />
              {item.title}
            </n.NavCategoryBox>
          );
        })}
      </n.NavMidWrap>
    </n.NavContainer>
  );
};

export default Nav;
