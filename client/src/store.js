import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./pages/school-list/schoolsSlice";
import newSchoolReducer from "./component/add-school-form/addSchoolSlicer";

const store = configureStore({
  reducer: {
    schools: schoolReducer,
    newSchool: newSchoolReducer,
  },
});


export default store;
