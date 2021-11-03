const express = require('express');
const router = express.Router();
const list = require('./list.routes');

router.use('/', list);

module.exports = router;