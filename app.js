var express = require('express')
var app = express()

app.use(express())

app.post('/', function (request, response) {
  console.log('POST /')
  console.log('the request to Post is: ', response)

  let client_id =
    '563724994731-iet2ujk56l5vp1v3kg7tea54ilq35r8g.apps.googleusercontent.com'
  let googleauth = [
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}`,
    `redirect_uri=https://zahmadi.wmdd4950.com/authcode`,
    `response_type=code&scope=openid profile email`,
  ].join('&')

  console.log('got a token')
  var matches = googleauth.match(/(.*)\#access_token\=(.*?)\&/)
  var app_url = matches[1]
  var token = matches[2]

  console.log('the token! ', token)

  // - Step 3 -
  // Now that we have a token, we can make API calls to facebook.
  // Here we simply retrieve the user's name, email, and profile pic
  // to confirm the user's identity
  //   fetch(`https://www.googleapis.com/userinfo/v2/me`, {
  //     // IMPORTANT:  You must include the token in the Authroization header
  //     //             Otherwise how can facebook know who is calling?
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(function (response) {
  //       // Extra error check, if we get an invalid response, it means that
  //       // our token is invalid.  We will restart the login flow by
  //       // clearing the access_token

  //       return response.json()
  //     })
  //     .then((res) => {
  //       let userinfo = document.createElement("h2")
  //       userinfo.innerText = `Hello ${res.name}`
  //       document.body.append(userinfo)

  //       let userpic = document.createElement("img")
  //       userpic.src = res.picture
  //       document.body.append(userpic)
  //     })
})

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
