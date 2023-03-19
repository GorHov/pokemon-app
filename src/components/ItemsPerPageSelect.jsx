import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleItemsPerPageChange } from "../store/actions";

function ItemsPerPageSelect() {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  const handleChange = (event) => {
    dispatch(handleItemsPerPageChange(event));
  };

  return (
    <Select
      value={itemsPerPage}
      placeholder="10 per page"
      onChange={handleChange}
    >
      <MenuItem value={10}>10 per page</MenuItem>
      <MenuItem value={20}>20 per page</MenuItem>
      <MenuItem value={50}>50 per page</MenuItem>
    </Select>
  );
}

export default ItemsPerPageSelect;
