require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

const workoutRouter = require("./routes/workouts");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/workouts", workoutRouter);

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the app",
  });
});

app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});
