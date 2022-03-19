import Link from "next/link";
import {
  HeaderContainer,
  LogoWrapper,
  Navigation,
  NavigationItem,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>LOGO</LogoWrapper>
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
    </HeaderContainer>
  );
};

export default Header;
