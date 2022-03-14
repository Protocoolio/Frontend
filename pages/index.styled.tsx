import styled, { css } from "styled-components";
import { customStyle } from "../styles/constants";

export const HomeContainer = styled.div(
  () => css`
    display: flex;
    background-color: ${customStyle.colors.primary};
    height: 100%;
    width: 100%;
  `
);
