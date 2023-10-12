import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = configureStore(
  { reducer: bookReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
