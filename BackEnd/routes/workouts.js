const express = require("express");

const router = express.Router();

const {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getSingleWorkout);

// POST a workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
