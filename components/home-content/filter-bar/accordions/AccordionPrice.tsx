import * as React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion } from "./Accordion.styled";

const AccordionPrice = () => {
  return (
    <Accordion.Wrapper>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Price</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.TextContent>Price</Accordion.TextContent>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionPrice;
