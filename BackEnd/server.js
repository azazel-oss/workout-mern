require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the app",
  });
});

app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});
