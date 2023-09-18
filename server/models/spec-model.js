const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Spec = new Schema(
  {
    spec_title: { type: String, required: true },
    spec_text: { type: String, required: true },
    spec_image: { type: String },
  }
)

module.exports = mongoose.model('specs', Spec)