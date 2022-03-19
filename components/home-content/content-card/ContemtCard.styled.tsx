import styled from "styled-components";
import { Card } from "@mui/material";
import { customStyle } from "../../../styles/constants";

export const StyledCard = styled(Card)`
  background-color: ${customStyle.colors.secondary};
  height: 400px;
  margin: 10px;
  padding: 10px;
  transition: 0.2s;
  width: 250px;

  &:hover {
    box-shadow: ${customStyle.boxShadow};
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export const CardActionsContainer = styled.div`
  background-color: ${customStyle.colors.primary};
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
