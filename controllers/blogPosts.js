const express = require('express'),
  router = express.Router();

  router.get('/blogPosts', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("blogPosts");
});

module.exports = router;
