/*
  - user
  - date of the blogPost
  - picture: file upload, save it to the uploads folder, give it a unique name;
    when saved to the database we just give the location of the file
  - title
  - Type
  - ingredients
  - instructions
*/
const fs = require('fs');

exports.readPosts =  function(){
  let posts = JSON.parse(fs.readFileSync(__dirname+'/../data/blogPosts.json'));
  return posts;
}

exports.writePosts =  function(posts){
  fs.writeFileSync(__dirname+'/../data/blogPosts.json', JSON.stringify(posts));
}

exports.insertPost = function(user, image, title, type, ingredients, instructions){
  let posts = exports.readPosts();
  let post = {
    "id": posts.length,
    "name": user,
    "date": new Date(),
    "picture": image,
    "title": title,
    "type": type,
    "ingredients": ingredients,
    "instructions": instructions
  };
  posts.push(post);
  exports.writePosts(posts);
}

exports.selectPostsByUser = function(user){
  let posts = exports.readPosts();
  let userPosts = [];
  posts.forEach(post=>{
    if(post.user==user){
      userPosts.push(post);
    }
  });
  return userPosts;
}

exports.selectPostsByRecent = function(num){
  let posts = exports.readPosts();
  return posts.slice(-num);//start from that number and count backwards
}

exports.selectAuthors = function(){
  let posts = exports.readPosts();
  //create a set
  let authors = new Set();
  //add each author to the set
  posts.forEach(post=>{
    authors.add(post.name);
  });
  //return the set
  return authors;
}
