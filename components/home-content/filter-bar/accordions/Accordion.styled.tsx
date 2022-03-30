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
  font-family: ${customStyle.fonts.lato};
  font-weight: bold;
`;

const TextContent = styled(Typography)<{ network?: boolean }>(
  ({ network }) => ({
    fontFamily: `${customStyle.fonts.roboto}`,
    fontSize: "14px",
    fontWeight: "bold",
    marginLeft: network ? "5px" : "0",
  })
);

const Content = styled("div")`
  width: 100%;
  height: 100%;
`;

export const SortNetworkItem = styled("div")`
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover {
    background-color: ${customStyle.colors.primary};
    cursor: pointer;
  }
`;

export const CheckboxItem = styled("div")`
  margin-left: 5px;
`;

export const Accordion = {
  Wrapper,
  Summary,
  Details,
  Title,
  TextContent,
  Content,
};
