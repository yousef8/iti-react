import { createSlice } from "@reduxjs/toolkit";

const form = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setImageUrl } = form.actions;

export default form.reducer;
