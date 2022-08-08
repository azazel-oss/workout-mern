const express = require("express");

const {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();
// Require auth for all workouts
router.use(requireAuth);

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
