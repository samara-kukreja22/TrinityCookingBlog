const express = require('express'),
  router = express.Router();

const Users = require('../models/users');

router.get('/editProfile', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  let user = null;
  if(request.user){
    user = Users.getUser(request.user._json.email);
  }
  response.render("editProfile", {
    user: user
  });
});
module.exports = router;
