/*
  - display Name
  - identity (user id/ google id)
  - date they registered
  - permission level: 0 = banned, 1 = normal, 2 = admin
  - each user can have a picture number, everytime they
    upload a picture to give it a unique name you increment the picture number
*/
const fs = require('fs');

exports.readUsers =  function(){
  let users = JSON.parse(fs.readFileSync(__dirname+'/../data/users.json'));
  return users;
}

exports.writeUsers =  function(users){
  fs.writeFileSync(__dirname+'/../data/users.json', JSON.stringify(users));
}

exports.getUser =  function(id){
  let users = exports.readUsers();
  return users[id];
}

exports.insertUser = function(id){
  let users = exports.readUsers();
  let username = id.substring(0,id.search("@"));
  let user =
   {
    "user": username,
    "id": id,
    "date": new Date(),
    "permission": 0,
    "picNum": 0
  };
  users[id] = user;
  exports.writeUsers(users);
}

exports.updateDisplayName = function(id, displayName){
  let users = exports.readUsers();
  users[id].user = displayName;
  exports.writeUsers(users);
}

exports.addPicNum = function(id){
  let users = exports.readUsers();
  let num = users[id].picNum;
  users[id].picNum++;
  exports.writeUsers(users);
  return num;
}
