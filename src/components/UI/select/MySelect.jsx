import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setOrderBy } from "../../../store/bookReducer";
import { categories } from "../../../consts/consts";
import { fetchBooks } from "../../../api/fetchBooks";

const MySelect = ({ type, selectItems }) => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(selectItems[0]);

  const [search, category, orderBy] = useSelector((store) => [
    store.search,
    store.category,
    store.orderBy,
  ]);

  const handleChange = (e) => {
    setSelect(e.target.value);
    if (categories.indexOf(e.target.value) !== -1) {
      dispatch(setCategory(e.target.value));
      dispatch(fetchBooks(search, e.target.value, orderBy));
    } else {
      dispatch(setOrderBy(e.target.value));
      dispatch(fetchBooks(search, category, e.target.value));
    }
  };

  return (
    <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
      <InputLabel id="demo-simple-select-label">{type}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={select}
        label={select}
        onChange={handleChange}
      >
        {selectItems.map((category) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
