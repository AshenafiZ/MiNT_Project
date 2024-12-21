const express = require('express');
const { login, signup, roles } = require('../controllers/authCntroller');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/roles', roles);

module.exports = router;

