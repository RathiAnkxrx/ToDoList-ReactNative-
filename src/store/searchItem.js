import { createSlice } from "@reduxjs/toolkit";

const SearchExistingItem = createSlice({
  name: "is item present",
  initialState: { inputItem: "" },
  reducers: {
    searchItem(state, action) {
      state.inputItem = action.payload;
    },
  },
});

export const { searchItem } = SearchExistingItem.actions;
export default SearchExistingItem.reducer;
