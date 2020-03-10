var express = require('express');
var router = express.Router();
// them controller
const controller = require('../controller/search.controller');

router.get('/', controller.homeGet);

module.exports = router;