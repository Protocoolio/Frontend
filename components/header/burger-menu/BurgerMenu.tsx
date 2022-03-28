import React from "react";
import { BurgerWrapper } from "./BurgerMenu.styled";

interface BurgerMenuProps {
  setSideMenuActive: (value: boolean) => void;
  sideMenuActive: boolean;
}

const BurgerMenu = ({ setSideMenuActive, sideMenuActive }: BurgerMenuProps) => {
  return (
    <BurgerWrapper
      sideMenuActive={sideMenuActive}
      onClick={() => {
        setSideMenuActive(!sideMenuActive);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </BurgerWrapper>
  );
};

export default BurgerMenu;
