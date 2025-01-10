const express = require('express');
const { login, signup, roles, createRole, logout, getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/roles', roles);
router.post('/roles', createRole);
router.post('/logout', logout);
router.get('/user', getUser);

module.exports = router;
