const express = require('express') // server framework
const bodyParser = require('body-parser') // get body off network requests
const cors = require('cors') //middleware Connect/Express
let path = require('path')

const db = require('./db')
const dogSpotRouter = require('./routes/dogspot-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
// app.use(express.static(path.join(__dirname, '../client/build')))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
      res.send('hi')
})

app.use('/api', dogSpotRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))