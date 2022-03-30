import { breakpoints } from "../../../styles/constants";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 20px 0 10px 20px;

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSelect = styled(Select)`
  margin-right: 20px;
  width: 200px;

  @media (max-width: ${breakpoints.md}px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;
