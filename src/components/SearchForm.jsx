import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";

function SearchForm(props) {
  const { searchType, searchTerm, handleTypeSelectChange, handleSearchInputChange } = props;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        select
        label="Search by type"
        variant="filled"
        value={searchType}
        onChange={handleTypeSelectChange}
      >
        <MenuItem value="">All Types</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="fire">Fire</MenuItem>
        <MenuItem value="water">Water</MenuItem>
        <MenuItem value="electric">Electric</MenuItem>
        <MenuItem value="grass">Grass</MenuItem>
        <MenuItem value="ice">Ice</MenuItem>
        <MenuItem value="fighting">Fighting</MenuItem>
        <MenuItem value="poison">Poison</MenuItem>
        <MenuItem value="ground">Ground</MenuItem>
        <MenuItem value="flying">Flying</MenuItem>
        <MenuItem value="psychic">Psychic</MenuItem>
        <MenuItem value="bug">Bug</MenuItem>
        <MenuItem value="rock">Rock</MenuItem>
        <MenuItem value="ghost">Ghost</MenuItem>
        <MenuItem value="dragon">Dragon</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="steel">Steel</MenuItem>
        <MenuItem value="fairy">Fairy</MenuItem>
      </TextField>
      <TextField
        label="Search field"
        type="search"
        variant="filled"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
    </Box>
  );
}

export default SearchForm;
