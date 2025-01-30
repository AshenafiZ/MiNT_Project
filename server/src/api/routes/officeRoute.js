const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');
const officeController = require('../controllers/officeController');
const router = express.Router();

router.use(verifyRole(['office'])); 

router.get('/kpis/:id', officeController.getAllKpis);
router.post('/kpis/:id', officeController.addKpiValue);


module.exports = router;
