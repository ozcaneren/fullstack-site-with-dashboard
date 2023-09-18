const router = require("express").Router();
const {userSchema} = require("../models/user-model");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

router.post("/login", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userSchema.findOne({ email: req.body.email });
    if (!user) return res.status(401).send("Invalid");

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) return res.status(401).send("Invalid");

    const token = user.generateAuthToken();
    res.status(200).send({data: token, message: "Login successful"});

  } catch (error) {
    res.status(500).send(error.message);
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
}
module.exports = router;