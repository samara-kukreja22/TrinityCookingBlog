const express = require('express'),
  router = express.Router();

const Users = require('../models/users');

  router.get('/chat', function(request, response) {
  if(request.user){
    let user = Users.getUser(request.user._json.email);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("chat", {
      userFirstName: user.name
    });
  }else{
    response.redirect('/');
  }
});

module.exports = router;
