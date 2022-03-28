import styled, { css } from "styled-components";
import { customStyle } from "../../../styles/constants";

export const SideMenuWrapper = styled.div<{ sideMenuActive?: boolean }>(
  ({ sideMenuActive }) => css`
    height: 95vh;
    width: 100vw;
    position: fixed;
    top: 5vh;
    transform: translateX(100vw);
    z-index: 999;
    background-color: ${customStyle.colors.secondary};
    transition: 0.7s ease;
    display: flex;
    justify-content: center;

    ${sideMenuActive &&
    css`
      transform: translateX(0);
    `}
  `
);

export const Navigation = styled.ul`
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
  margin: 10px 0;
  transition: 0.2s;
  font-size: 24px;

  &:hover {
    transform: scale(1.2);
  }

  & > a {
    text-decoration: none;
    color: ${customStyle.colors.black};

    &:hover {
      color: ${customStyle.colors.violet};
    }
  }
`;
