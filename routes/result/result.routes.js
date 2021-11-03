const router = require('express').Router();
const resultController = require('../../controllers/result/result.controller');

router.post('/', resultController.postShortUrl);

module.exports = router;