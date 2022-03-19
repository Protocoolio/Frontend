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

export const MainContentWrapper = styled.div`
  flex: 5;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
