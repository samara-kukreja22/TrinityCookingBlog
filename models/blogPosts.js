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

exports.insertPost = function(user, date, image, title, type, ingredients, instructions){
  //
}

exports.selectPostsByUser = function(user){

}

exports.selectPostsByRecent = function(num){
  //selects the num number of posts that are most recent
}
