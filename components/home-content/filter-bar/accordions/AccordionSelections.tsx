import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Accordion, CheckboxItem } from "./Accordion.styled";

const AccordionSelections = () => {
  const [renouncedCheckboxValue, setRenouncedCheckboxValue] =
    useState<boolean>(false);
  const [auditedCheckboxValue, setAuditedCheckboxValue] =
    useState<boolean>(false);
  const [KYCCheckboxValue, setKYCCheckboxValue] = useState<boolean>(false);
  const [promotedCheckboxValue, setPromotedCheckboxValue] =
    useState<boolean>(false);

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
        <Accordion.Content>
          <FormGroup>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={renouncedCheckboxValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRenouncedCheckboxValue(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>Renounced</Accordion.TextContent>}
              />
            </CheckboxItem>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={auditedCheckboxValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAuditedCheckboxValue(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>Audited</Accordion.TextContent>}
              />
            </CheckboxItem>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={KYCCheckboxValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setKYCCheckboxValue(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>KYC</Accordion.TextContent>}
              />
            </CheckboxItem>
            <CheckboxItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={promotedCheckboxValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPromotedCheckboxValue(e.target.checked)
                    }
                  />
                }
                label={<Accordion.TextContent>Promoted</Accordion.TextContent>}
              />
            </CheckboxItem>
          </FormGroup>
        </Accordion.Content>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionSelections;
