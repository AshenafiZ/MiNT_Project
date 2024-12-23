const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(verifyRole(['admin'])); 

module.exports = router;
