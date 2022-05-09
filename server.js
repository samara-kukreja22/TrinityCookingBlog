const express = require('express');
const app = express();
  router = express.Router();
const fs = require('fs');
const ejs = require('ejs');
const methodOverride = require('method-override');
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'));//middleware for CRUD:UPDATE and DELETE
app.use(express.static('public')); //specify location of static assests//current CDN
app.set('views', __dirname + '/views'); //specify location of templates
app.set('view engine', 'ejs'); //specify templating library

app.use(require('./controllers/auth'));
app.use(require('./controllers/author'));
app.use(require('./controllers/authors'));
app.use(require('./controllers/blogPosts'));
app.use(require('./controllers/chat'));
app.use(require('./controllers/createBlogPost'));
app.use(require('./controllers/editProfile'));
app.use(require('./controllers/index'));
/*
app.get('/', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("index");
});

app.get('/authors', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("authors");
});
app.get('/author', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("author");
});
app.get('/blogPosts', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("blogPosts");
});
app.get('/chat', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("chat");
});
app.get('/createBlogPost', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("createBlogPost");
});
app.get('/login', function(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("login");
});*/

app.use("", function(request, response){
  response.status(404);
  response.setHeader('Content-Type', 'text/html')
  response.render("error");
/*  response.render("error", {
    "errorCode":"404",
    user: request.user
  });*/
});


let socketapi =require('./controllers/socketConnections');
socketapi.io.attach(server);//attach sockets to the server

const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server started at http://localhost:'+port+'.')
});
