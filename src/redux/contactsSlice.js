import initialContacts from "../contacts.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [...initialContacts],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
