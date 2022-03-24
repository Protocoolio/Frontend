import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import { Accordion, CheckboxItem } from "./Accordion.styled";

const AccordionContracts = () => {
  const [checkboxTrue, setCheckboxTrue] = useState<boolean>(false);
  const [checkboxFalse, setCheckboxFalse] = useState<boolean>(false);

  return (
    <Accordion.Wrapper>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Contracts verified</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.Content>
          <FormGroup>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxTrue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCheckboxTrue(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>true</Accordion.TextContent>}
              />
            </CheckboxItem>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxFalse}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCheckboxFalse(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>false</Accordion.TextContent>}
              />
            </CheckboxItem>
          </FormGroup>
        </Accordion.Content>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionContracts;
