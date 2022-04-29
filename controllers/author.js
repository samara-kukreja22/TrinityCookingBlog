const express = require('express'),
  router = express.Router();

  router.get('/author', function(request, response) {
      response.status(200);
      response.setHeader('Content-Type', 'text/html')
      response.render("author");
  });
  module.exports = router;
