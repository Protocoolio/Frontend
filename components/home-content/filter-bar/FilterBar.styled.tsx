import styled, { css, keyframes } from "styled-components";
import { customStyle } from "../../../styles/constants";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export const FilterContainer = styled.div<{ filterActive?: boolean }>(
  ({ filterActive }) => css`
    border-right: 1px solid ${customStyle.colors.border};
    height: 100%;
    flex: 0.25;
    font-family: ${customStyle.fonts.permanent_marker};

    ${filterActive &&
    css`
      flex: 1;
    `};
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

export const Title = styled.h3<{ filterActive?: boolean }>(
  ({ filterActive }) => css`
    display: ${filterActive ? "block" : "none"};
  `
);

export const FilterItem = styled.div(
  () => css`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-between;
    padding: 16px;
    transition: 0.2s;
    width: 100%;
  `
);

const IconAnimation = keyframes`
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0px);
      }
`;

export const FilterIcon = styled(ReadMoreIcon)<{ filterActive?: boolean }>(
  ({ filterActive }) => css`
    ${filterActive &&
    css`
      transform: rotate(-180deg);
    `}

    ${!filterActive &&
    css`
      &:hover {
        animation: ${IconAnimation} 1s linear infinite;
      }
    `}
  `
);
