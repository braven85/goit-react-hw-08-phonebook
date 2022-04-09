import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "../../services/api";

const initialState = {
  filter: "",
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contactsList = action.payload;
      state.loading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contactsList.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contactsList = action.payload;
    },
  },
});

export const { filteredContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
