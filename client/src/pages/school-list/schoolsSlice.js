import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schools: [],
  isLoading: false,
  error: "",
  searchSchoolList: [],
  selectedSchool: {},
  updateMsg: "",
  updateMsgError: "",
};

const schoolListSlice = createSlice({
  name: "schoolList",
  initialState,
  reducers: {
    fetchSchoolLoading: (state) => {
      state.isLoading = true;
    },
    fetchSchoolSuccess: (state, action) => {
      state.schools = action.payload;
      state.searchSchoolList = action.payload;
      state.isLoading = false;
    },
    fetchSchoolFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchSchools: (state, { payload }) => {
      state.searchSchoolList = state.schools.filter((row) => {
        if (!payload) return row;

        return row.university.toLowerCase().includes(payload.toLowerCase());
      });
    },
    deleteSchoolLoading: (state) => {
      state.isLoading = true;
    },
    deleteSchoolSuccess: (state, action) => {
      state.isLoading = false;
      state.schools = state.schools.filter((row) => row._id !== action.payload);
      state.error = "";
      // state.replyMsg = action.payload;
    },
    deleteSchoolFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSchoolLoading: (state) => {
      state.isLoading = true;
    },
    updateSchoolSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.updateMsg = action.payload;
    },
    updateSchoolFail: (state, action) => {
      state.isLoading = false;
      state.updateMsgError = action.payload;
    },

    fetchSingleSchoolLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleSchoolSuccess: (state, action) => {
      state.selectedSchool = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleSchoolFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = schoolListSlice;

export const {
  fetchSchoolLoading,
  fetchSchoolSuccess,
  fetchSchoolFail,
  searchSchools,
  // deleteSchools,
  fetchSingleSchoolLoading,
  fetchSingleSchoolSuccess,
  fetchSingleSchoolFail,
  deleteSchoolLoading,
  deleteSchoolSuccess,
  deleteSchoolFail,
  updateSchoolLoading,
  updateSchoolSuccess,
  updateSchoolFail,
} = actions;

export default reducer;
