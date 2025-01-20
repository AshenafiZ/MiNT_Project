const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');
const strategyController = require("../controllers/strategyController");
const newController = require('../controllers/newController')

const router = express.Router();

// router.use(verifyRole(['strategy'])); 

router.get('/goals', newController.getAllGoals); 
router.get('/goal/:id', strategyController.getGoal); 
router.post('/goal', newController.createGoal); 
router.post('/:goalId/kpa', newController.addKpa); 
router.post('/:kpaId/kpi', newController.addKpi); 
router.put('/goal/:id', strategyController.updateGoal); 
router.delete('/goal/:id', strategyController.deleteGoal); 

module.exports = router;
