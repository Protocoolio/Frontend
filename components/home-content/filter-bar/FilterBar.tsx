import React from "react";

import AccordionNetwork from "./accordions/AccordionNetwork";
import AccordionContracts from "./accordions/AccordionContracts";

import {
  FilterContainer,
  FilterIcon,
  FilterItem,
  IconContainer,
  Title,
  StickyContainer,
} from "./FilterBar.styled";
import AccordionSelections from "./accordions/AccordionSelections";

const FilterBar = () => {
  return (
    <FilterContainer>
      <StickyContainer>
        <FilterItem>
          <Title>Filters</Title>
          <IconContainer>
            <FilterIcon />
          </IconContainer>
        </FilterItem>
        <>
          <AccordionNetwork />
          <AccordionContracts />
          <AccordionSelections />
        </>
      </StickyContainer>
    </FilterContainer>
  );
};

export default FilterBar;
