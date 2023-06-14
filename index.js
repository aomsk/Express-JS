const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// import routes
const routes = require("./routes/routes.js");
app.use("/api", routes);

// connect database
const mongoString = process.env.MONGODB_ATLAS_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
// end connect database

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
