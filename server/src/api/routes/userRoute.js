const express = require('express')
const {upload} = require('../middlewares/middleware')
const { login, signup, roles, createRole, logout, getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', upload.single('profile_photo'), signup);
router.get('/roles', roles);
router.post('/roles', createRole);
router.post('/logout', logout);
router.get('/logger', getUser);

module.exports = router;
