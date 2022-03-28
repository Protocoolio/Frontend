import { breakpoints } from "../../styles/constants";
import { useState } from "react";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import BurgerMenu from "./burger-menu/BurgerMenu";
import Link from "next/link";
import MobileMenu from "./mobile-menu/MobileMenu";
import {
  HeaderContainer,
  LogoWrapper,
  Navigation,
  NavigationItem,
} from "./Header.styled";

const Header = () => {
  const [sideMenuActive, setSideMenuActive] = useState<boolean>(false);
  const { isMaxWidth } = useWindowSize();

  return (
    <>
      <HeaderContainer>
        <LogoWrapper>LOGO</LogoWrapper>
        {isMaxWidth(breakpoints.mobile) ? (
          <BurgerMenu
            setSideMenuActive={setSideMenuActive}
            sideMenuActive={sideMenuActive}
          />
        ) : (
          <Navigation>
            <NavigationItem>
              <Link href={"/tomb"}>TOMB</Link>
            </NavigationItem>
            <NavigationItem>
              <Link href={"/olympus"}>OLYMPUS</Link>
            </NavigationItem>
            <NavigationItem>
              <Link href={"/warp"}>WARP</Link>
            </NavigationItem>
          </Navigation>
        )}
      </HeaderContainer>
      <MobileMenu sideMenuActive={sideMenuActive} />
    </>
  );
};

export default Header;
