const express = require('express');
const { login, signup, roles, logout, getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/role', roles);
router.post('/logout', logout);
router.get('/logger', getUser);

module.exports = router;

