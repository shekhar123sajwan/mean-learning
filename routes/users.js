const express = require('express');
const Router = express.Router();

Router.get('/register', (req, res, next) => {
    res.send('Register')
})

Router.get('/authenticate', (req, res, next) => {
    res.send('Auth')
})

//Profile
Router.get('/profile', (req, res, next) => {
    res.send('Profile')
})

//Validate
Router.get('/validate', (req, res, next) => {
    res.send('Validate')
})

module.exports = Router;