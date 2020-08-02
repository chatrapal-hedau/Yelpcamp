var express  = require('express');
var router   = express.Router();
var passport = require('passport');
var User     = require('../models/user');
const user = require('../models/user');
  

    router.get("/", function(req, res){
        res.render("landing");
    });

    //Register route
    router.get('/register', function(req,res){
        res.render('register');
    });

    //handling sign up logic route
    router.post('/register', function(req,res){
        var newUser = new User({username: req.body.username});
        User.register(newUser, req.body.password, function(err, user){
            try {
                passport.authenticate('local')(req, res, function () {
                    req.flash('success', "Welcome to yelpcamp " + user.username);
                    res.redirect('/campgrounds');
                });
            } catch (err) {
                req.flash('error', err.message);
                res.render('register');
            }
        });
    });

    //Login Route

    router.get('/login', function(req, res){
        res.render('login');
    })

    //handling login logic route
    router.post('/login', passport.authenticate('local',{
        successRedirect: '/campgrounds',
        failureRedirect: '/login',
    }), function(req,res){
    })

    //Logout Route
    router.get('/logout', function(req, res){
        req.logout();
        req.flash('success', 'Logged you out');
        res.redirect('/campgrounds');
    })

module.exports = router;