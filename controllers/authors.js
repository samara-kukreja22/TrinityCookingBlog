const express = require('express'),
  router = express.Router();

const Users = require('../models/users');
const Posts = require('../models/blogPosts');

  router.get('/authors', function(request, response) {
    let authors = Posts.selectAuthors();
    response.status(200);
    response.setHeader('Content-Type', 'text/html');
    response.render("authors",{
      authors: authors
    });
});

module.exports = router;
