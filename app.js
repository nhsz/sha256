const express = require('express')
const crypto = require('crypto')

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  let seed = Date.now().toString()
  let hash = crypto.createHash('sha256')
    .update(seed, 'utf8')
    .digest('hex')

  res.json(hash)
})

app.listen(3000, function () {
  console.log('Your hash is being generated...')
})
