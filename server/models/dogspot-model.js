const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DogSpot = new Schema(
      {
            size: {type: String, required: false },
            text: { type: String, required: true}
      }
)

module.exports = mongoose.model('dogspotting', DogSpot)