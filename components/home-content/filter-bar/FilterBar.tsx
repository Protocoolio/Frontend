import React from "react";

import AccordionStatus from "./accordions/AccordionStatus";
import AccordionPrice from "./accordions/AccordionPrice";
import AccordionCollections from "./accordions/AccordionCollections";
import AccordionCategories from "./accordions/AccordionCategories";

import {
  FilterContainer,
  FilterIcon,
  FilterItem,
  IconContainer,
  Title,
  StickyContainer,
} from "./FilterBar.styled";

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
          <AccordionStatus />
          <AccordionPrice />
          <AccordionCollections />
          <AccordionCategories />
        </>
      </StickyContainer>
    </FilterContainer>
  );
};

export default FilterBar;
