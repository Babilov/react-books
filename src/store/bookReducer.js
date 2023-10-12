const defaultStore = {
  search: "",
  category: "All",
  orderBy: "relevance",
  startIndex: 0,
  quantity: 0,
  books: [],
};

const GET_BOOKS = "GET_BOOKS";
const SET_CATEGORY = "SET_CATEGORY";
const SET_ORDERBY = "SET_ORDERBY";
const INC_MAXRESULT = "INC_MAXRESULT";

export const bookReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case GET_BOOKS:
      console.log(action);
      return {
        ...store,
        books: action.payload.books,
        search: action.payload.search,
        quantity: action.payload.quantity,
      };

    case SET_CATEGORY:
      return {
        ...store,
        books: [],
        category: action.payload,
      };

    case SET_ORDERBY:
      return {
        ...store,
        books: [],
        orderBy: action.payload,
      };

    case INC_MAXRESULT:
      console.log(action);
      return {
        ...store,
        books: [...store.books, ...action.payload.books],
        startIndex: store.startIndex + 31,
      };

    default:
      return { ...store };
  }
};

export const getBooks = (payload) => ({ type: GET_BOOKS, payload });
export const setCategory = (payload) => ({ type: SET_CATEGORY, payload });
export const setOrderBy = (payload) => ({ type: SET_ORDERBY, payload });
export const incMaxResult = (payload) => ({ type: INC_MAXRESULT, payload });
