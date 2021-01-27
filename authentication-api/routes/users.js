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

// Log user in

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        if (user.validatePassword(req.body.password)) {
          res.status(200).json(user);
        } else {
          res
            .status(401)
            .json({ message: "Username or Password is incorrect" });
        }
      }
    })
    .catch((error) => {
      console.log(error), res.status(500);
    });
});

module.exports = router;
