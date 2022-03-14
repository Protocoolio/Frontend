import styled, { css } from "styled-components";
import { customStyle } from "../../styles/constants";

export const HomeContentWrapper = styled.div<{ flex?: number }>(
  ({ flex }) => css`
    background-color: ${customStyle.colors.primary};
    flex: ${flex};
    min-height: 80vh;
    display: flex;
  `
);

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 5;
`;
