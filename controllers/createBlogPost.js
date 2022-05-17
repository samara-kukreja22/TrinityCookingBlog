const express = require('express'),
  router = express.Router();
const multer = require('multer');

  const User = require('../models/users');
  const Posts = require('../models/blogPosts');
  let File = require('../models/file_model');

  let privateStorage = multer.diskStorage({
    destination: function (request, file, cb) {
    cb(null, './uploads')
  },
  filename: function (request, file, cb) {
    cb(null, Date.now()+'-'+file.originalname.replace(' ', '-'));
  }
});
let privateUpload = multer({ storage: privateStorage });

  router.get('/createBlogPost', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("createBlogPost", {

    });
});

router.post('/createBlogPost', privateUpload.any(), async (request, response) => {
  if(request.user){
    let user = User.getUser(request.user._json.email);
    if(user.permission < 1){//do not have permission
      response.redirect('/error');
      return;
    }
    const file = request.files[0];
    if (!file) {
        const error = {
        'httpStatusCode' : 400,
        'message':'Please upload a file'
       }
      response.send(error);
    }
    //they have permisson and have submitted a file
    let fileURL = await File.uploadFile(file);//uploaded file
    let author = user.name;
    let title = request.body.title;
    let photo = fileURL;
    let type = request.body.type;
    let ingredients = request.body.ingredients.split(',');
    let instructions = request.body.instructions;
    Posts.insertPost(user.id, author, photo, title, type, ingredients, instructions);
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.redirect("/blogPosts");
  }
  else{
    response.redirect('/login');
  }

});

module.exports = router;
