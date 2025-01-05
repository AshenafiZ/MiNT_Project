const express = require('express');
const sectorController = require('../controllers/sectorController')
const verifyRole = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(verifyRole(['sector'])); 

router.get('/kpas/:id', sectorController.kpas)


module.exports = router;
