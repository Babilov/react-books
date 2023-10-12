import React from "react";
import Search from "../search/Search";
import BookList from "../../books/BookList";
import { useSelector } from "react-redux";
import SelectGroup from "../select/SelectGroup";
import { Typography } from "@mui/material";

const Header = () => {
  const books = useSelector((store) => store.books);
  const quantity = useSelector((store) => store.quantity);
  return (
    <>
      <Search />
      <SelectGroup />
      {books.length > 0 && (
        <Typography variant="h5" textAlign="left">
          Total Found: {quantity}
        </Typography>
      )}
      {books && books.length ? <BookList /> : <></>}
    </>
  );
};

export default Header;
