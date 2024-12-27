const express = require('express');
const { login, signup, roles } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/role', roles);

module.exports = router;

