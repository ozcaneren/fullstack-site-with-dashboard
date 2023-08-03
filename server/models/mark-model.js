const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mark = new Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('marks', Mark)