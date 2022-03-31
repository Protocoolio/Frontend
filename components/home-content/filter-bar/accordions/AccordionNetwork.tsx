import * as React from "react";
import Image from "next/image";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion, SortNetworkItem } from "./Accordion.styled";
import { networkSortItems } from "../../../../shared/constants";
import { FilterOption, NetworkSortItem } from "../../../../types/CommonTypes";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../../../../store/card-slice";
import { RootState } from "../../../../store/store";
import { filtersHandler } from "../../../../utils/helpers";

const AccordionNetwork = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.card.cardFilters);

  return (
    <Accordion.Wrapper defaultExpanded>
      <Accordion.Summary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Accordion.Title>Network</Accordion.Title>
      </Accordion.Summary>
      <Accordion.Details>
        <Accordion.Content>
          {networkSortItems.map((item: NetworkSortItem) => (
            <SortNetworkItem
              key={item.id}
              active={!!filters.find((filter) => filter === item.name)}
              onClick={() => dispatch(filtersHandler(filters, item.name))}
            >
              <Image src={item.src} alt={item.name} width="32" height="32" />
              <Accordion.TextContent network={true}>
                {item.name}
              </Accordion.TextContent>
            </SortNetworkItem>
          ))}
        </Accordion.Content>
      </Accordion.Details>
    </Accordion.Wrapper>
  );
};

export default AccordionNetwork;
