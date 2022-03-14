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
        <NavigationItem>TOMB</NavigationItem>
        <NavigationItem>OLYMPUS</NavigationItem>
        <NavigationItem>WARP</NavigationItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
