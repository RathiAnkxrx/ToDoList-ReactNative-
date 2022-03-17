import { configureStore } from "@reduxjs/toolkit";
import addNewItemReducer from "./addItem";
import searchExistingItem from "./searchItem";
const store = configureStore({
  reducer: {
    addNewItem: addNewItemReducer,
    inputSearch: searchExistingItem,
  },
});

export default store;
