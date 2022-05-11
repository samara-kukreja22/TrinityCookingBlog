const express = require('express'),
  router = express.Router();

const Users = require('../models/users');
const Posts = require('../models/blogPosts');

  router.get('/author/:name', function(request, response) {
    let name = request.params.name;
    let posts = Posts.selectPostsByUser(name);
      response.status(200);
      response.setHeader('Content-Type', 'text/html');
      response.render("author", {
        posts: posts,
        author: name
      });
  });
  module.exports = router;
