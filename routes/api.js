var express = require('express');
var router = express.Router();

router.use('/pods', require('./pods'));

module.exports = router;
