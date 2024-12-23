const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(verifyRole(['office'])); 


module.exports = router;
