const express = require("express");

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
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.json({
    msg: "Post a workout",
  });
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
