const mongoose = require('mongoose')
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-0artd.mongodb.net/sandbox?retryWrites=true&w=majority"

mongoose
      .connect(uri, { useNewUrlParser: true })
      .catch(e => {
            console.error('Connection error', e.message)
      })

const db = mongoose.connection

module.exports = db