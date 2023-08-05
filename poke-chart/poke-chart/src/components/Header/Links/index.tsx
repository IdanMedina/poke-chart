import { LinkWrapper } from "../../../styles/buttons";
import { NavLink } from "../../../styles/header";
import { CardIcon, ChartIcon, HomeIcon } from "../../../styles/icons";

const HeaderLink = () => {
  return (
    <>
      <NavLink>
        <LinkWrapper to="/">
          <HomeIcon />
        </LinkWrapper>
        <LinkWrapper to="chart">
          <ChartIcon />
        </LinkWrapper>
        <LinkWrapper to="card">
          <CardIcon />
        </LinkWrapper>
      </NavLink>
    </>
  );
};

export default HeaderLink
