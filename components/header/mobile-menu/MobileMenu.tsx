import Link from "next/link";
import React from "react";
import {
  Navigation,
  NavigationItem,
  SideMenuWrapper,
} from "./MobileMenu.styled";

interface MobileMenuProps {
  sideMenuActive?: boolean;
}

const MobileMenu = ({ sideMenuActive }: MobileMenuProps) => {
  return (
    <SideMenuWrapper sideMenuActive={sideMenuActive}>
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
    </SideMenuWrapper>
  );
};

export default MobileMenu;
