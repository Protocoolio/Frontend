import styled, { css } from "styled-components";
import { customStyle } from "../../../styles/constants";

export const BurgerWrapper = styled.button<{ sideMenuActive?: boolean }>(
  ({ sideMenuActive }) => css`
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 18px;
    justify-content: space-between;
    width: 26px;
    margin: 0;
    padding: 0;

    ${sideMenuActive &&
    css`
      span {
        &:nth-child(1) {
          transform: rotate(-36deg);
        }
        &:nth-child(2) {
          transform: scale(0);
        }
        &:nth-child(3) {
          transform: rotate(36deg);
        }
      }
    `}

    span {
      width: 100%;
      height: 3px;
      background-color: ${customStyle.colors.black};
      transition: 0.5s ease;
      transform-origin: right;
    }
  `
);
