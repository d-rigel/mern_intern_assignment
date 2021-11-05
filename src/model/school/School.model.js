const { SchoolSchema } = require("./School.schema");

const insertSchool = (schoolObj) => {
  return new Promise((resolve, reject) => {
    try {
      SchoolSchema(schoolObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getSchools = () => {
  return new Promise((resolve, reject) => {
    try {
      SchoolSchema.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getSchoolById = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      SchoolSchema.find({ _id })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const updateSchool = (_id, university, program, location) => {
  console.log(university, program, location);
  return new Promise((resolve, reject) => {
    try {
      SchoolSchema.findOneAndUpdate(
        { _id },
        {
          $set: { university, program, location },
        },
        { new: true }
      )
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const deleteSchool = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      SchoolSchema.findOneAndDelete({ _id })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  insertSchool,
  getSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
};
