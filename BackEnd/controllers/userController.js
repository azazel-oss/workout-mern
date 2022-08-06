const User = require("../models/user");
// Login user action
const loginUser = async (req, res) => {
  res.json({
    msg: "Login user",
  });
};

// Sign up user action
const signupUser = async (req, res) => {
  res.json({
    msg: "Sign up user",
  });
};

module.exports = { loginUser, signupUser };
