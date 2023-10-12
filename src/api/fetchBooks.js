import axios from "axios";
import { URL } from "../consts/consts";
import { getBooks, incMaxResult } from "../store/bookReducer";

export const fetchBooks = (
  search = "",
  category = "",
  orderBy = "relevance",
  startIndex = 0,
  pg = false
) => {
  return (dispatch) => {
    axios
      .get(
        `${URL}${search}${
          category !== "All" ? `+subject:${category}` : ""
        }&startIndex=${startIndex}&maxResults=30&orderBy=${orderBy}`
      )
      .then((resp) =>
        pg
          ? dispatch(
              incMaxResult({
                books: resp.data["items"],
                quantity: resp.data["totalItems"],
                search,
              })
            )
          : dispatch(
              getBooks({
                books: resp.data["items"],
                quantity: resp.data["totalItems"],
                search,
              })
            )
      );
  };
};
