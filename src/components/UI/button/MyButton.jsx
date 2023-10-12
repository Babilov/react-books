import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { incMaxResult } from "../../../store/bookReducer";
import { fetchBooks } from "../../../api/fetchBooks";

const MyButton = () => {
  const dispatch = useDispatch();

  const [search, category, orderBy, startIndex] = useSelector((store) => [
    store.search,
    store.category,
    store.orderBy,
    store.startIndex,
  ]);

  const handleClick = () => {
    // dispatch(incMaxResult());
    dispatch(fetchBooks(search, category, orderBy, startIndex + 31, true));
  };

  return (
    <Button onClick={handleClick} fullWidth sx={{ mt: 1 }}>
      Load more
    </Button>
  );
};

export default MyButton;
