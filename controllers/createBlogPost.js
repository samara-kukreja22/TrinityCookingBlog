const express = require('express'),
  router = express.Router();

  router.get('/createBlogPost', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("createBlogPost");
});

module.exports = router;
