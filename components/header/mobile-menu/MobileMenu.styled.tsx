import styled, { css } from "styled-components";
import { customStyle } from "../../../styles/constants";

export const SideMenuWrapper = styled.div<{ sideMenuActive?: boolean }>(
  ({ sideMenuActive }) => css`
    background-color: ${customStyle.colors.secondary};
    display: flex;
    height: 95vh;
    justify-content: center;
    position: fixed;
    top: 5vh;
    transform: translateX(100vw);
    transition: 0.5s ease;
    width: 100vw;
    z-index: 99;

    ${sideMenuActive &&
    css`
      transform: translateX(0);
    `}
  `
);

export const Navigation = styled.ul`
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 50px;
`;

export const NavigationItem = styled.li`
  cursor: pointer;
  font-family: ${customStyle.fonts.lato};
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  & > a {
    color: ${customStyle.colors.black};
    text-decoration: none;

    &:hover {
      color: ${customStyle.colors.violet};
    }
  }
`;
