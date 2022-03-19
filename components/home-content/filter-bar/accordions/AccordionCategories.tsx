import * as React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion } from "./Accordion.styled";

const AccordionCategories = () => {
  return (
    <Accordion.Wrapper>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Categories</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.TextContent>Categories</Accordion.TextContent>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionCategories;
