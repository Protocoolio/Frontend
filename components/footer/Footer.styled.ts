import styled, { css } from "styled-components";
import { customStyle } from "../../styles/constants";

export const FooterContainer = styled.footer(
  () => css`
    background-color: ${customStyle.colors.secondary};
    border-bottom: 1px solid ${customStyle.colors.border};
    border-top: 1px solid ${customStyle.colors.border};
    height: 10vh;
    position: relative;
    top: 5vh;
    width: 100%;
  `
);
