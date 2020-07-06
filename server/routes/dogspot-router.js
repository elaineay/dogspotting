const express = require('express')

const DogSpotCtrl = require('../controllers/dogspot-ctrl')

const router = express.Router()

router.post('/dogspotting', DogSpotCtrl.createSpot)
router.put('/dogspotting/:id', DogSpotCtrl.updateSpot)
router.delete('/dogspotting/:id', DogSpotCtrl.deleteSpot)
router.get('/dogspotting/:id', DogSpotCtrl.getSpotById)
router.get('/dogspotting', DogSpotCtrl.getDogSpots)

module.exports = router