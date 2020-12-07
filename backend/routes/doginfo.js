const express = require('express');
const router = express.Router();
const doginfoControllers = require('../controllers/doginfo');

router.post('/upload', doginfoControllers.upload);

module.exports = router;