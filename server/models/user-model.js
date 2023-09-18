const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const jwt = require("jsonwebtoken");

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

User.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY,{expiresIn: "1h"});
  return token;
}

const userSchema = mongoose.model("users", User);

const validate = (data) => {
  const schema = Joi.object({
    password: passwordComplexity().required().label("Password"),
    email: Joi.string().email().required().label("Email"),
  });
  return schema.validate(data);
}

module.exports = {userSchema, validate};