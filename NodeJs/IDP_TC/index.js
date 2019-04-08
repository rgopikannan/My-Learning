const express = require('express');

// Import the axios library, to make HTTP requests
const axios = require('axios');
const querystring = require('querystring');

// This is the client ID and client secret that you obtained
// while registering the application
const clientSecret = 'hf8odIw2eQf3cjv7ch9k8XYxcobqzFwrjB4drRJ2JS2vZgfFaEau3YXk98o6c57R'


var router = express.Router()
const app = express();
const path = require('path');
const port = 3033;
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

app.use(express.static(path.join(__dirname, 'public')));
//add the router
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

// define the home page route

router.get('/', function (req, res) {
    res.redirect('welcome.html')
})

// Declare the redirect route
// app.get('/oauth/redirect', (req, res) => {
router.get('/exchangeToken', (req, res) => {
    // The req.query object has the query params that
    // were sent to this route. We want the `code` param
    console.log('req.query.code...  '+req.query.code);
    
    const requestToken = req.query.code;
    const clientId = 'IDPLUS-mendeley';//req.query.client_id;
    const redirect_uri = 'http://localhost:9080/IDPlusTestClient/html/popupRedirect.html';
    const scope = 'openid profile els_auth_info  urn:com:elsevier:idp:policy:product:indv_identity els_analytics_info'

     var dataParam = {
         "grant_type": "authorization_code",
         "code": requestToken,
         "redirect_uri": redirect_uri ,
         "client_secret": clientSecret,
         "client_id": clientId,
         "scope": scope
    };
    var headers = {
        "Content-type": 'application/x-www-form-urlencoded',
        "Accept": 'application/json',
        "X-ELS-ConsumerClient": "SANDBOX",
        "X-ELS-ResourceVersion": "1"
    };
    axios.post("https://certnx-id.elsevier.com/as/token.oauth2", querystring.stringify(dataParam),
        {headers: headers}
    ).then((response) => {
        // Once we get the response, extract the access token from
        // the response body
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log(error)
    });
});