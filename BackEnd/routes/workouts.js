const express = require("express");
const Workout = require("../models/workouts");

const router = express.Router();

// GET all workouts
router.get("/", (req, res, next) => {
  res.json({
    msg: "Get all workouts",
  });
});

// GET a single workout
router.get("/:id", (req, res, next) => {
  res.json({
    msg: "Get a single workout " + req.params.id,
  });
});

// POST a workout
router.post("/", async (req, res, next) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// DELETE a workout
router.delete("/:id", (req, res, next) => {
  res.json({
    msg: "Delete a single workout " + req.params.id,
  });
});

// UPDATE a workout
router.patch("/:id", (req, res, next) => {
  res.json({
    msg: "Update a single workout " + req.params.id,
  });
});

module.exports = router;
