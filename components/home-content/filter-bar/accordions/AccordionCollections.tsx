import * as React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion } from "./Accordion.styled";

const AccordionCollections = () => {
  return (
    <Accordion.Wrapper>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Collections</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.TextContent>Collections</Accordion.TextContent>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionCollections;
