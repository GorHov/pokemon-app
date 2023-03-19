import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { useDispatch } from "react-redux";

function Pagination({ count, currentPage, onPageChange }) {

  const dispatch = useDispatch();

  const handlePageChange = (event, value) => {
    dispatch(onPageChange(value));
  };

  return (
    <MuiPagination
      count={count}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
    />
  );
}

export default Pagination;
