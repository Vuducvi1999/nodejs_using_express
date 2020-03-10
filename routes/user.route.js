var express = require('express');
var router = express.Router();
// them controller
const controller = require('../controller/user.controller');


router.get('/', controller.homeGet);

router.get('/:id', controller.homeSearch);

module.exports = router;