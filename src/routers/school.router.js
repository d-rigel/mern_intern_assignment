const express = require("express");
const router = express.Router();

const {
  insertSchool,
  getSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
} = require("../model/school/School.model");

//Create a school
router.post("/", async (req, res) => {
  try {
    const { university, program, location } = req.body;
    const schoolObj = {
      university,
      program,
      location,
    };

    const result = await insertSchool(schoolObj);
    if (result._id) {
      return res.json({
        status: "success",
        message: "new school has been created",
      });
    }

    res.json({
      status: "error",
      message: "Unable to create school, please try again later",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Get all Schools
router.get("/", async (req, res) => {
  try {
    const result = await getSchools();

    res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Get specific School
router.get("/:schId", async (req, res) => {
  try {
    const { schId } = req.params;

    const result = await getSchoolById(schId);

    res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Update sch details
router.put("/:schId", async (req, res) => {
  try {
    const { schId } = req.params;
    const { university, program, location } = req.body;

    const result = await updateSchool(schId, university, program, location);

    if (result._id) {
      return res.json({
        status: "success",
        message: "successfully updated",
      });
    }
    console.log(result);
    return res.json({
      status: "error",
      message: "Unable to update",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Delete sch
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await deleteSchool(_id);
    console.log("result from school router", result);

    return res.json({
      status: "success",
      message: "school deleted",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;
