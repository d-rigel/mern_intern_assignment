import {
  fetchSchoolLoading,
  fetchSchoolSuccess,
  fetchSchoolFail,
  searchSchools,
  fetchSingleSchoolLoading,
  fetchSingleSchoolSuccess,
  fetchSingleSchoolFail,
  // deleteSchools,
  deleteSchoolLoading,
  deleteSchoolSuccess,
  deleteSchoolFail,
  updateSchoolLoading,
  updateSchoolSuccess,
  updateSchoolFail,
} from "./schoolsSlice";

import {
  getAllShools,
  getSingleSchool,
  removeSchool,
  updateSch,
} from "../../api/schoolApi";

export const fetchAllSchools = () => async (dispatch) => {
  dispatch(fetchSchoolLoading());
  try {
    const result = await getAllShools();
    console.log(result.data.result);
    dispatch(fetchSchoolSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchSchoolFail(error.message));
  }
};

export const filterSearchSchool = (str) => (dispatch) => {
  dispatch(searchSchools(str));
};

//action for single school
export const fetchSingleSchool = (_id) => async (dispatch) => {
  dispatch(fetchSingleSchoolLoading());
  try {
    const result = await getSingleSchool(_id);
    console.log(result);
    dispatch(
      fetchSingleSchoolSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleSchoolFail(error.message));
  }
};

///write here
export const deleteASchool = (_id) => async (dispatch) => {
  dispatch(deleteSchoolLoading());
  try {
    const result = await removeSchool(_id);
    if (result.status === "error") {
      return dispatch(deleteSchoolFail(result.message));
    }
    // dispatch(fetchSingleSchool(_id));

    dispatch(deleteSchoolSuccess(_id));
  } catch (error) {
    console.log(error.message);
    // dispatch(deleteSchoolFail(result.message));
  }
};

//Update school
export const updateASchool = (_id, updateObj) => async (dispatch) => {
  dispatch(updateSchoolLoading());
  try {
    const result = await updateSch(_id, updateObj);
    console.log("action update", result);
    if (result.status === "error") {
      return dispatch(updateSchoolFail(result.message));
    }
    dispatch(fetchSingleSchool(_id));

    dispatch(updateSchoolSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(updateSchoolFail(error.message));
  }
};
