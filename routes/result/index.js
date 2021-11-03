const express = require('express');
const router = express.Router();
const result = require('./result.routes');

router.use('/', result);

module.exports = router;