var express = require('express')
var app = express()

app.use(express())

app.post('/', function (request, response) {
  console.log('POST /')
  console.log('the request to Post is: ', request.data)
})

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
