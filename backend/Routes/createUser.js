const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const jwtsecret = "NUjOqLEihJIaptHchsngpsvfxeTW3k"


const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "your password must have atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      }).then(res.status(201).json({ success: true }));

    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
);

router.post(
  "/loginUser",
  [
    body("email").isEmail(),
    body("password", "your password must have atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "User not found" });
      }

      const pwdcomp = await bcrypt.compare(req.body.password,userData.password);

      if (!pwdcomp) {
        return res.status(400).json({ errors: "incorrect password" });
      }

      const data = {
        user:{
          id:userData.id
        }
      }

      const authToken = jwt.sign(data,jwtsecret)

      res.status(201).json({ success: true,authToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
);

module.exports = router;
