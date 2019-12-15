const express = require('express');
const Router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

Router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    console.log(req.body)

    // User.addUser(newUser, (err, user) => {
    //     if (err) {
    //         res.json({ success: false, msg: 'Failed to register user' });
    //     } else {
    //         res.json({ success: true, msg: 'User registered' });
    //     }
    // })
})

Router.get('/authenticate', (req, res, next) => {
    res.send('Auth')
})

//Profile
Router.get('/profile', (req, res, next) => {
    res.send('Profile')
})


module.exports = Router;