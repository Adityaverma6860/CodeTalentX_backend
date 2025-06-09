const express = require('express');
const router = express.Router();
const { setTimeTable, getTimeTableByClass } = require('../controllers/timetableController');

router.post('/set', setTimeTable);
router.get('/:className', getTimeTableByClass);

module.exports = router;
