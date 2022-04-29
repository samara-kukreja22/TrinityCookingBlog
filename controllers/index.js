const express = require('express'),
  router = express.Router();

router.get('/login', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("login");
});

router.use("", function(request, response){
  response.status(404);
  response.setHeader('Content-Type', 'text/html')
  response.render("error", {
    "errorCode":"404",
    user: request.user
  });
});

module.exports = router;
