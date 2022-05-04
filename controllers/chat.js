const express = require('express'),
  router = express.Router();

  router.get('/chat', function(request, response) {
  if(request.user){
    let user = User.getUser(request.user._json.email);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("index", {
      userFirstName: user.firstName
    });
  }else{
    response.redirect('/login');
  }
});

module.exports = router;
