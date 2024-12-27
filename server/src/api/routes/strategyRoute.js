const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');
const strategyController = require("../controllers/strategyController");

const router = express.Router();

// router.use(verifyRole(['strategy'])); 

router.get('/goals', strategyController.getGoals); 
router.get('/goal/:id', strategyController.getGoal); 
router.post('/goals', strategyController.createGoal); 
router.post('/kpas', strategyController.createKpa); 
router.post('/kpis', strategyController.createKpi); 
router.put('/goal/:id', strategyController.updateGoal); 
router.delete('/goal/:id', strategyController.deleteGoal); 

module.exports = router;
