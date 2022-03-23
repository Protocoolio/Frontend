import styled from "styled-components";
import { customStyle } from "../../styles/constants";

export const AsideContainer = styled.div`
  align-items: center;
  border-left: 1px solid ${customStyle.colors.border};
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  width: 340px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin-top: 30px;
  text-decoration: underline;
  font-family: ${customStyle.fonts.lato};
`;
