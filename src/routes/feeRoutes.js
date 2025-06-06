const express = require('express');
const router = express.Router();
const { recordPayment, getPaymentStatus } = require('../controllers/feeController');

// POST - Record Fee Payment
router.post('/record', recordPayment);

// GET - View Payment Status Summary
router.get('/status/:studentId', getPaymentStatus);

module.exports = router;
