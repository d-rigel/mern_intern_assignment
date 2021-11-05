const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
require("dotenv").config();

//load school router
const schRouter = require("./src/routers/school.router");

//import mongodb
const connectDB = require("./config/db");

connectDB();

//Handle CORS error
app.use(cors());

//Logger
app.use(morgan("tiny"));

//Set body bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//school route
app.use("/v1/sch", schRouter);

app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
