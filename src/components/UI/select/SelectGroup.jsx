import { Grid } from "@mui/material";
import React from "react";
import MySelect from "./MySelect";
import { categories, filters } from "../../../consts/consts";

const SelectGroup = () => {
  return (
    <Grid container justifyContent={"center"} spacing={5}>
      <Grid item xs={3}>
        <MySelect type={"Categories"} selectItems={categories} />
      </Grid>
      <Grid item xs={3}>
        <MySelect type={"Sorting by"} selectItems={filters} />
      </Grid>
    </Grid>
  );
};

export default SelectGroup;
