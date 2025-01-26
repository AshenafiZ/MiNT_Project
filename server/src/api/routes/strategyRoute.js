const express = require('express');
const verifyRole = require('../middlewares/authMiddleware');
const strategyController = require('../controllers/strategyController')

const router = express.Router();

router.use(verifyRole(['strategy'])); 

router.get('/goals', strategyController.getAllGoals); 
router.post('/goal', strategyController.createGoal); 
router.post('/:goalId/kpa', strategyController.addKpa);  
router.post('/:kpaId/kpi', strategyController.addKpi); 
router.put('/goal/:id', strategyController.updateGoal); 
router.delete('/goal/:id', strategyController.deleteGoal); 

module.exports = router;
