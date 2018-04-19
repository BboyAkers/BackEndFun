var express = require('express');
var router = express.Router();
var User = require('../models/user');


//GET /login
register.get('login', function(req, res, next){
  return res.render('login', {title: 'Log In'});
});

//POST /login
router.post('/login', function(req, res, next){
  if(req.body.email && req.body.password){
    User.authenticate(req.body.email, req.body.password, function(error, user){
      if(error || !user){
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }
      else{
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  }
  else{
    var err = new Error('Email and Password are required.');
    err.status = 401;
    return next(err);
  }
});

//GET /register
router.get('/register', function(req, res, next){
  return res.render('register', {title: 'Sign Up'});
});

//POST /register
router.post('/register', function(req, res, next){
  if(req.body.email &&
    req.body.name &&
    req.body.favoriteBook &&
    req.body.password &&
    req.body.confirmPassword){
      if(req.body.password !== req.body.confirmPassword){
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err)
      }
      
      var userData = {
        email: req.body.email,
        name: req.body.name,
        favoriteBook: req.body.favoriteBook,
        password: req.body.password
      };

      User.create(userData, function(error, user){
        if(error){
          return next(error);
        }
        else {
          return res.redirect('/profile');
        }
      });
  }
  else{
    var err = new Error('All fields are required.');
    err.status = 400;
    return next(err);
  }
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
