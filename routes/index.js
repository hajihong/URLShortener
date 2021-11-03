const express = require('express');
const router = express.Router();
const result = require('./result');
const list = require('./list');
const resultController = require('../controllers/result/result.controller');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { url: null, message: null});
});

router.get('/:shortUrl', resultController.redirectUrl);

router.use('/result', result);
router.use('/list', list);

module.exports = router;
