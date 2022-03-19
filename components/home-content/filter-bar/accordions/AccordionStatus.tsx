import * as React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion } from "./Accordion.styled";
import { Title } from "../FilterBar.styled";

const AccordionStatus = () => {
  return (
    <Accordion.Wrapper defaultExpanded>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Status</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.TextContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quasi quos sed sunt voluptates commodi ab, quod dolor
        </Accordion.TextContent>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionStatus;
