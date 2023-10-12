import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import {
  getAuthors,
  getCategory,
  getImage,
  getTitle,
} from "../../utils/books/getBookInfo";
import MyButton from "../UI/button/MyButton";

const BookList = () => {
  const books = useSelector((store) => store.books);
  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid key={book["id"]} item xs={4}>
          <BookItem
            image={getImage(book)}
            title={getTitle(book)}
            authors={getAuthors(book)}
            category={getCategory(book)}
          />
        </Grid>
      ))}
      <MyButton />
    </Grid>
  );
};

export default BookList;
