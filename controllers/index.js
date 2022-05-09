const express = require('express'),
  router = express.Router();
const Users = require('../models/users');
router.get('/', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  let user = null;
  if(request.user){
    user = Users.getUser(request.user._json.email);
  }
  response.render("index", {
    user: user
  });
});
router.get('/login', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  let user = null;
  if(request.user){
    user = Users.getUser(request.user._json.email);
  }
  response.render("login", {
    user: user
  });
});
router.use("", function(request, response){
  response.status(404);
  response.setHeader('Content-Type', 'text/html');
  let user = null;
  if(request.user){
    user = Users.getUser(request.user._json.email);
  }
  response.render("error", {
    "errorCode":"404",
    user: user
  });
});

module.exports = router;
