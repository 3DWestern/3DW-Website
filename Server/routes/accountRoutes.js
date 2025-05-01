const express = require('express');

const {register, login, logout} = require('../controllers/account')

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

//router.post('/returnAccessToken', returnAccess);

//router.post('/isUserAuth', verifyJWT);

module.exports = router;


