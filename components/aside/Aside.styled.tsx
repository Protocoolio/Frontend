import styled, { css } from "styled-components";
import { customStyle } from "../../styles/constants";

export const AsideContainer = styled.div<{ flex?: number }>(
  ({ flex }) => css`
    align-items: center;
    border-left: 1px solid ${customStyle.colors.border};
    display: flex;
    flex: ${flex};
    flex-wrap: wrap;
    justify-content: center;
    min-height: 80vh;
    padding: 0;
  `
);
