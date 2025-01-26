const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const userController = require('../controllers/userController');

// Register route
router.post('/register', userController.register);

// Login route
router.post('/login', userController.login);

// Logout route
router.post('/logout', userController.logout);

module.exports = router;