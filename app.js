var express = require('express')
var app = express()

app.use(express())

app.post('/', function (request, response) {
  console.log('POST /')
  console.log('the request to Post is: ', response)

  // (Receive authCode via HTTPS POST)

  if (request.getHeader('X-Requested-With') == null) {
    // Without the `X-Requested-With` header, this request could be forged. Aborts.
    console.log('No X requested with!')
  }

  // Set path to the Web application client_secret_*.json file you downloaded from the
  // Google API Console: https://console.developers.google.com/apis/credentials
  // You can also find your Web application client ID and client secret from the
  // console and specify them directly when you create the GoogleAuthorizationCodeTokenRequest
  // object.
  let CLIENT_SECRET_FILE = '/path/to/client_secret.json'

  // Exchange auth code for access token
  let clientSecrets = GoogleClientSecrets.load(
    JacksonFactory.getDefaultInstance(),
    new FileReader(CLIENT_SECRET_FILE)
  )
  let tokenResponse = new GoogleAuthorizationCodeTokenRequest(
    new NetHttpTransport(),
    JacksonFactory.getDefaultInstance(),
    'https://oauth2.googleapis.com/token',
    clientSecrets.getDetails().getClientId(),
    clientSecrets.getDetails().getClientSecret(),
    authCode,
    REDIRECT_URI
  ) // Specify the same redirect URI that you use with your web
    // app. If you don't have a web version of your app, you can
    // specify an empty string.
    .execute()

  let accessToken = tokenResponse.getAccessToken()
  console.log('the access token: ', accessToken)
  // Use access token to call API
  //   let credential = new GoogleCredential().setAccessToken(accessToken);
  //   let drive =
  //       new Drive.Builder(new NetHttpTransport(), JacksonFactory.getDefaultInstance(), credential)
  //           .setApplicationName("Auth Code Exchange Demo")
  //           .build();
  //   let file = drive.files().get("appfolder").execute();

  //   // Get profile info from ID token
  //   let idToken = tokenResponse.parseIdToken();
  //   let payload = idToken.getPayload();
  //   let userId = payload.getSubject();  // Use this value as a key to identify a user.
  //   let email = payload.getEmail();
  //   let emailVerified = Boolean.valueOf(payload.getEmailVerified());
  //   let name = (String) payload.get("name");
  //   let pictureUrl = (String) payload.get("picture");
  //   String locale = (String) payload.get("locale");
  //   String familyName = (String) payload.get("family_name");
  //   String givenName = (String) payload.get("given_name");
})

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
