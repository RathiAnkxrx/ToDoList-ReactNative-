import { createSlice } from "@reduxjs/toolkit";

const AddNewItem = createSlice({
  name: "Add new Product",
  initialState: { items: ["Milk", "Banana", "Bread", "Egg"] },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = AddNewItem.actions;
export default AddNewItem.reducer;
