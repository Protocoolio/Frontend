import styled, { css } from "styled-components";
import { customStyle } from "../../../styles/constants";

export const FilterContainer = styled.div<{ active?: boolean }>(
  ({ active }) => css`
    align-items: flex-start;
    border-right: 1px solid ${customStyle.colors.border};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    transition: 0.05s;
    flex: 0.15;
    ${active &&
    css`
      flex: 1;
    `};
  `
);

export const IconContainer = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
