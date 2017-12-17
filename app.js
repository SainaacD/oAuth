var bodyParser = require('body-parser');
var express = require('express');
var OAuthServer = require('express-oauth-server');
 
var app = express();
 
app.oauth = new OAuthServer({
  model: require('./model'), // See https://github.com/oauthjs/node-oauth2-server for specification 
});
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(app.oauth.authorize());
 
app.use(function(req, res) {
  res.send('Secret area');
});
 
app.listen(3000);