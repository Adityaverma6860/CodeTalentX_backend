const express = require('express');
const router = express.Router();
const { generateReportCard, getReportCard } = require('../controllers/reportCardController');

router.post('/generate', generateReportCard);
router.get('/:studentId', getReportCard);

module.exports = router;
