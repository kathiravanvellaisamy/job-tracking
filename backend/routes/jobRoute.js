const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel.js");
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController.js");

// create job
router.post("/", createJob);

// get all the job
router.get("/", getAllJobs);

// Get particular job
router.get("/:id", getJob);

// Update the Job
router.put("/:id", updateJob);

// Delete the job
router.delete("/:id", deleteJob);

module.exports = router;
