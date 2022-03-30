import styled, { css } from "styled-components";
import { breakpoints, customStyle } from "../../../styles/constants";
import FilterListIcon from "@mui/icons-material/FilterList";

export const FilterContainer = styled.div<{ showFilterBar?: boolean }>(
  ({ showFilterBar }) => css`
    border-right: 1px solid ${customStyle.colors.border};
    height: 100%;
    min-width: 200px;
    position: relative;
    transition: 0.3s;

    background-color: ${customStyle.colors.primary};

    @media (max-width: ${breakpoints.md}px) {
      border-right: none;
      position: fixed;
      top: 5vh;
      width: 100vw;
      height: 100vh;
      left: -100%;

      z-index: 999;

      ${showFilterBar &&
      css`
        left: 0;
      `};
    }
  `
);

export const IconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h3`
  font-family: ${customStyle.fonts.lato};
`;

export const FilterItem = styled.div(
  () => css`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
  `
);

export const FilterIcon = styled(FilterListIcon)``;

export const StickyContainer = styled.div<{ showFilterBar?: boolean }>(
  ({ showFilterBar }) => css`
    position: fixed;
    width: 199px;
    top: 5vh;
    z-index: 9999;

    ${showFilterBar &&
    css`
      width: 100%;
    `}
  `
);
