const DogSpot = require('../models/dogspot-model')
const { findOneAndDelete } = require('../models/dogspot-model')

createSpot = (req, res) => {
      const body = req.body
      if (!body) {
            return res.status(400).json({ // 400 bad request to server
                  success: false,
                  error: 'Dogspot must be provided',
            })
      }

      const dogspot = new DogSpot(body)
      if (!dogspot) {
            return res.status(400).json({
                  success: false,
                  error: err
            })
      }

      dogspot
            .save()
            .then(() => {
                  return res.status(201).json({ //201 create success
                        success: true,
                        id: dogspot._id,
                        message: 'Dog spotting created',
                  })
            })
            .catch(err => {
                  return res.status(400).json({
                        err,
                        message: 'Dog spotting not created',
                  })
            })
}

updateSpot = async (req, res) => {
      const body = req.body
      if (!body) {
            return res.status(400).json({ // 400 bad request to server
                  success: false,
                  error: 'Dogspot must be provided',
            })
      }

      DogSpot.findOne({_id: req.params.id}, (err, dogspot) => {
            if (err) {
                  return res.status(404).json({
                        err,
                        message: 'Movie not found',
                  })
            }

            dogspot.size = body.size
            dogspot.text = body.text

            dogspot
                  .save()
                  .then(() => {
                        return res.status(200).json({ // 200 ok success
                              success: true,
                              id: dogspot._id,
                              message: 'Dogspot updated!',
                        })
                  })
                  .catch(err => {
                        return res.status(404).json({
                              err,
                              message: 'Dogspot not updated',
                        })
                  })
      })
}

deleteSpot = async (req, res) => {
      await DogSpot.findOneAndDelete({ _id: req.params.id }, (err, dogspot) => {
            if (err) {
                  return res.status(400).json({ success: false, error: err})
            }

            if(!dogspot) {
                  return res
                        .status(404)
                        .json({ success: false, error: `Dogspot not found` })
            }

            return res.status(200).json({ success: true, data: dogspot })
      }).catch(err => console.log(err))
}

getSpotById = async (req, res) => {
      await DogSpot.findOne({ _id: req.params.id }, (err, movie) => {
            if (err) {
                  return res.status(400).json({ success: false, error: err })
            }

            if(!movie) {
                  return res
                        .status(404)
                        .json({ success: false, error: `Dogspot not found` })
            }
            return res.status(200).json({ success: true, data:movie })
      }).catch(err => console.log(err))
}

getDogSpots = async (req, res) => {
      await DogSpot.find({}, (err, movies) => {
            if (err) {
                  return res.status(400).json({ success: false, error: err })
            }
            if (!movies.length) {
                  return res
                        .status(404)
                        .json({ success: false, error: `Dogspot not found` })
            }
            return res.status(200).json({ success: true, data: movies })
      }).catch(err => console.log(err))
}

module.exports = {
      createSpot,
      updateSpot,
      deleteSpot,
      getSpotById,
      getDogSpots,
}