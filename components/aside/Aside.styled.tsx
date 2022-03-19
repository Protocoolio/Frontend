import styled, { css } from "styled-components";
import { customStyle } from "../../styles/constants";

export const AsideContainer = styled.div<{ flex?: number }>(
  ({ flex }) => css`
    align-items: center;
    border-left: 1px solid ${customStyle.colors.border};
    display: flex;
    flex: ${flex};
    flex-direction: column;
    min-height: 80vh;
  `
);

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin-top: 30px;
  text-decoration: underline;
`;
