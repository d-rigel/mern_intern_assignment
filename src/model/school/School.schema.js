const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  university: {
    type: String,
    maxlength: 200,
    required: true,
  },
  program: {
    type: String,
    maxlength: 200,
    required: true,
  },

  location: {
    type: String,
    maxlength: 100,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = {
  SchoolSchema: mongoose.model("Sch", SchoolSchema),
};
