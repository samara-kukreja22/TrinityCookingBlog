const express = require('express'),
  router = express.Router();

const Users = require('../models/users');
const Posts = require('../models/blogPosts');

  router.get('/blogPosts', function(request, response) {
    let posts = Posts.selectPostsByRecent(10);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("blogPosts", {
      posts: posts
    });
});

module.exports = router;
