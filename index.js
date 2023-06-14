const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const routes = require("./routes/routes.js"); // import routes
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
