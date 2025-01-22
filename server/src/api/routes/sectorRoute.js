const express = require('express');
const sectorController = require('../controllers/sectorController')
const newController = require('../controllers/newController')
const verifyRole = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(verifyRole(['sector'])); 

router.get('/kpas/:id', sectorController.getAllKpas)
router.get('/kpas/assign', sectorController.getAllKpas)


module.exports = router;
