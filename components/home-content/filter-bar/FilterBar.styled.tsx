import styled, { css } from "styled-components";
import { customStyle } from "../../../styles/constants";
import FilterListIcon from "@mui/icons-material/FilterList";

export const FilterContainer = styled.div`
  border-right: 1px solid ${customStyle.colors.border};
  height: 100%;
  min-width: 200px;
`;

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

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;
