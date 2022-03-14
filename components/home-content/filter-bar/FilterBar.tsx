import React, { useState } from "react";
import { FilterContainer, IconContainer } from "./FilterBar.styled";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";

interface FilterBarProps {
  filterActive: boolean;
  setFilterActive: (value: boolean) => void;
}

const FilterBar = ({ filterActive, setFilterActive }: FilterBarProps) => {
  return (
    <FilterContainer active={filterActive}>
      <IconContainer onClick={() => setFilterActive(!filterActive)}>
        {filterActive ? <VisibilityOffSharpIcon /> : <VisibilityIcon />}
      </IconContainer>
    </FilterContainer>
  );
};

export default FilterBar;
