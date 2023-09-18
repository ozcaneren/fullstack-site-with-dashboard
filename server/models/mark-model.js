const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mark = new Schema(
    {
        type: { type: String, required: true },
        title: { type: String, required: true },
        piece: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
    },
    { timestamps: true },
)

module.exports = mongoose.model('marks', Mark)