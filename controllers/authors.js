const express = require('express'),
  router = express.Router();

  router.get('/authors', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("authors");
});

module.exports = router;
