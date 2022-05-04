/*
  - display Name
  - identity (user id/ google id)
  - date they registered
  - permission level: 0 = banned, 1 = normal, 2 = admin
  - each user can have a picture number, everytime they
    upload a picture to give it a unique name you increment the picture number
*/
const fs = require('fs');

exports.getUser =  function(id){
  return null;
  //asking for a particular user use their gogle id
  //look for the user with the id and give back the user
}

exports.insertUser = function(id, date){
  //to insert a user have this info and make up the rest
}

exports.updateDisplayName = function(id, displayName){
  //can update the displayName
}

exports.addPicNum = function(id){
  //increases the picNum for the given user
}
