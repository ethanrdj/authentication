const express = require("express");
const router = express();
const User = require("../models/users");

// Create new user

router.post("/", async (req, res) => {
  const user = await User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch {
    res.status(400).json({ message: err.message });
  }
});
