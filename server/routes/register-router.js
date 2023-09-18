const router = require("express").Router();
const {userSchema, validate} = require("../models/user-model");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await userSchema.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new userSchema({...req.body, password: hashPassword}).save();
    res.status(201).send("User registered successfully.");

  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;