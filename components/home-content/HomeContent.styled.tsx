import styled from "styled-components";
import { Button } from "@mui/material";
import { customStyle } from "../../styles/constants";

export const HomeContentWrapper = styled.div`
  background-color: ${customStyle.colors.primary};
  display: flex;
  position: relative;
`;

export const MainContentWrapper = styled.div``;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ShowFiltersButton = styled(Button)`
  padding: 20px 30px;
  font-size: 20px;
`;

export const FilterButtonWrapper = styled.div`
  bottom: 5vh;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const FilterCounter = styled.div`
  align-items: center;
  background-color: ${customStyle.colors.white};
  border-radius: 5px;
  color: ${customStyle.colors.black};
  display: flex;
  font-family: ${customStyle.fonts.lato};
  font-size: 20px;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  margin-left: 5px;
  width: 30px;
`;
