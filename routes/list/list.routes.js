const router = require('express').Router();
const listController = require('../../controllers/list/list.controller');

router.get('/', listController.getUrlList);

module.exports = router;