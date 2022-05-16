const express = require('express');
const router = express.Router();
const Joi = require('joi');

const userService = require('./user.service')

router.post('/sign-up', register);
router.post('/login', login);

function register(req, res, next){
    userService.register(req.body).then(()=>res.json({message: 'Registration Successful'})).catch(next);
}

function login(req, res, next){
    userService.login(req.body).then(()=>res.json({message: 'Login successful'})).catch(next);
}

module.exports = router;