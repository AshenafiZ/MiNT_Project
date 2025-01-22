const express = require('express');
const ministerController = require('../controllers/ministerController')
const verifyRole = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(verifyRole(['minister'])); 

router.post('/goal/approval/:id', ministerController.updateGoal);
router.post('/kpa/approval/:id', ministerController.updateKpa);
router.get('/kpas/pending', ministerController.pendingKpas);
router.get('/kpas/approved', ministerController.approvedKpas);
router.get('/kpas/rejected', ministerController.rejectedKpas);
router.get('/kpas/approved/:id', ministerController.myApprovedKpa);
router.get('/kpas/rejected/:id', ministerController.rejectedByMe);

module.exports = router;
