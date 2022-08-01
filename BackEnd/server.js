require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;

// connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connection established with the database"));
db.on("error", console.error.bind(console, "mongo connection error"));

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
