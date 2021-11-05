import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  university: "",
  program: "",
  location: "",
  isLoading: false,
  error: "",
  successMsg: "",
};

const newSchoolSlice = createSlice({
  name: "newSchool",
  initialState,
  reducers: {
    addNewSchoolPending: (state) => {
      state.isLoading = true;
    },
    addNewSchoolSuccess: (state, action) => {
      state.isLoading = false;
      state.university = action.payload;
      state.program = action.payload;
      state.location = action.payload;
      state.successMsg = action.payload;
    },
    addNewSchoolFail: (state, action) => {
      state.isLoading = true;
      state.successMsg = action.payload;
    },
    restSuccessMsg: (state) => {
      state.isLoading = false;
      state.successMsg = "";
    },
  },
});

export const {
  addNewSchoolPending,
  addNewSchoolSuccess,
  addNewSchoolFail,
  restSuccessMsg,
} = newSchoolSlice.actions;

export default newSchoolSlice.reducer;
