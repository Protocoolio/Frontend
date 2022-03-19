import { styled } from "@mui/system";
import { customStyle } from "../../../../styles/constants";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export const Wrapper = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: `1px solid ${customStyle.colors.border}`,
  borderBottom: `1px solid ${customStyle.colors.border}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: `${customStyle.colors.secondary}`,
  fontFamily: `${customStyle.fonts.ubuntu}`,
}));

const Summary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(() => ({
  backgroundColor: `${customStyle.colors.primary}`,
}));

const Details = styled(MuiAccordionDetails)(() => ({
  borderTop: `1px solid ${customStyle.colors.border}}`,
}));

const Title = styled(Typography)`
  font-family: ${customStyle.fonts.permanent_marker};
`;

const TextContent = styled(Typography)`
  font-family: ${customStyle.fonts.ubuntu};
`;

export const Accordion = {
  Wrapper,
  Summary,
  Details,
  Title,
  TextContent,
};
