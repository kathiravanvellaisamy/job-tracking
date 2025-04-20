const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { default: router } = require("./routes/jobRoute.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4440;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/jobs", require("./routes/jobRoute.js"));
// Database connection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Mongo DB is connected");
  })
  .then((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
