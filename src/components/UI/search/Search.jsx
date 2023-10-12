import React, { useState } from "react";
import { Paper, InputBase, Typography, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

import { fetchBooks } from "../../../api/fetchBooks";

const Search = () => {
  const dispatch = useDispatch();

  const category = useSelector((store) => store.category);
  const orderBy = useSelector((store) => store.orderBy);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(dispatch(fetchBooks(search, category, orderBy)));
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={1}
        sx={{ mb: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mt: 3 }}>
            Search a book
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            onSubmit={(e) => handleSubmit(e)}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ flexGrow: 1 }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton
              onClick={() => dispatch(fetchBooks(search, category, orderBy))}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
