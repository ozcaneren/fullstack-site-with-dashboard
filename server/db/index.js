const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://erenozcandev:159753@cluster1.b5xorql.mongodb.net/marks?retryWrites=true&w=majority', { useNewUrlParser: true })
  .catch(e => {
      console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db