var express = require('express');
var router = express.Router();

// module từ controller
const controller = require('../controller/create.controller');


router.get('/', controller.homeGet);

router.post('/', controller.homePost);

module.exports = router;