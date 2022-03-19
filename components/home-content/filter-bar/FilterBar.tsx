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
} from "./FilterBar.styled";

interface FilterBarProps {
  filterActive: boolean;
  setFilterActive: (value: boolean) => void;
}

const FilterBar = ({ filterActive, setFilterActive }: FilterBarProps) => {
  return (
    <FilterContainer filterActive={filterActive}>
      <FilterItem>
        <Title filterActive={filterActive}>Filters</Title>
        <IconContainer onClick={() => setFilterActive(!filterActive)}>
          <FilterIcon filterActive={filterActive} />
        </IconContainer>
      </FilterItem>
      {filterActive && (
        <>
          <AccordionStatus />
          <AccordionPrice />
          <AccordionCollections />
          <AccordionCategories />
        </>
      )}
    </FilterContainer>
  );
};

export default FilterBar;
