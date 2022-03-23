import { StyledSelect, Wrapper } from "./SortPanel.styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { sortOptions } from "../../../shared/constants";
import { SortOptions } from "../../../types/CommonTypes";
import React, { useState } from "react";
import { Button, FormControl, MenuItem } from "@mui/material";

const SortPanel = () => {
  const [sortValue, setSortValue] = useState<SortOptions | "">("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSortValue(event.target.value as SortOptions);
  };

  return (
    <Wrapper>
      <FormControl>
        <InputLabel color="primary" id="demo-multiple-name-label">
          Sort by
        </InputLabel>
        <StyledSelect
          color="primary"
          id="demo-multiple-name"
          input={<OutlinedInput label="Sort by" />}
          labelId="demo-multiple-name-label"
          //@ts-expect-error
          onChange={handleChange}
          value={sortValue}
        >
          {sortOptions.map((option: SortOptions, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setSortValue("")}
      >
        Clear sort
      </Button>
    </Wrapper>
  );
};

export default SortPanel;
