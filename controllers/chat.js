const express = require('express'),
  router = express.Router();

  router.get('/chat', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("chat");
});

module.exports = router;
