var express = require('express')
var app = express()

app.use(express())

app.post('/authcode', function (request, response) {
  console.log('POST /')
  console.log('the request to Post is: ', request)
  let client_id =
    '563724994731-iet2ujk56l5vp1v3kg7tea54ilq35r8g.apps.googleusercontent.com'
})

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
