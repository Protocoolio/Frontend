import styled, { css } from "styled-components";
import { customStyle } from "../../styles/constants";

export const HeaderContainer = styled.header(
  () => css`
    background-color: ${customStyle.colors.secondary};
    border-bottom: 1px solid ${customStyle.colors.border};
    border-top: 1px solid ${customStyle.colors.border};
    display: flex;
    height: 10vh;
    justify-content: space-between;
    left: 0;
    padding: 0 100px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  `
);

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Navigation = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationItem = styled.li`
  cursor: pointer;
  margin: 0 20px;
  padding: 5px;
`;
