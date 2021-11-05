import axios from "axios";

const rootUrl = "/v1/";
const allSchoolUrl = rootUrl + "sch";
const schoolUrl = rootUrl + "sch/";

export const getAllShools = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(allSchoolUrl);
      //   console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleSchool = async (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(schoolUrl + _id);
      console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const createNewSchool = async (frmData) => {
  console.log("from api", frmData);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(schoolUrl, frmData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
      });
      console.log(result.data);
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//delete School
export const removeSchool = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.delete(
        schoolUrl + _id,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer ",
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//update school
export const updateSch = (_id, updateObj) => {
  console.log("string", updateObj);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(schoolUrl + _id, updateObj, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
      });
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
