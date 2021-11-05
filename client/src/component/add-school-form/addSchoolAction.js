import {
  addNewSchoolPending,
  addNewSchoolSuccess,
  addNewSchoolFail,
} from "./addSchoolSlicer";

import { createNewSchool } from "../../api/schoolApi";

export const createASchool = (frmData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(addNewSchoolPending());
      const result = await createNewSchool(frmData);
      if (result.status === "error") {
        return dispatch(addNewSchoolFail(result.message));
      }
      dispatch(addNewSchoolSuccess(result.message));
    } catch (error) {
      console.log(error);
      dispatch(addNewSchoolFail(error.message));
    }
  });
};
