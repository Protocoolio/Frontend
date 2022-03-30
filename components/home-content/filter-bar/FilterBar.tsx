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

interface FilterBarProps {
  showFilterBar: boolean;
}

const FilterBar = ({ showFilterBar }: FilterBarProps) => {
  return (
    <FilterContainer showFilterBar={showFilterBar}>
      <StickyContainer showFilterBar={showFilterBar}>
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
