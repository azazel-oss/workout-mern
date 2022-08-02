const Workout = require("../models/workouts");
const mongoose = require("mongoose");

// Get all workouts
async function getAllWorkouts(req, res, next) {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    workouts,
  });
}

// Get a single workout
async function getSingleWorkout(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({
      error: "No such workout",
    });

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({
      error: "No such workout found",
    });
  }
  res.status(200).json({
    workout,
  });
}

// Create a workout
async function createWorkout(req, res, next) {
  const { title, reps, load } = req.body;
  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!reps) emptyFields.push("reps");
  if (!load) emptyFields.push("load");
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

// Delete a workout
async function deleteWorkout(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({
      error: "No such workout",
    });

  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json({
      msg: "The workout was deleted",
      workout,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
}

// Update a workout
async function updateWorkout(req, res, next) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({
      error: "No such workout found",
    });

  const workout = await Workout.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!workout) return res.status(400).json({ error: "No such workout" });
  res.status(200).json(workout);
}

module.exports = {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
};
