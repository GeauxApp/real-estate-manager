var express = require('express');
var router = express.Router();

router.use('/pods', require('./pods'));
router.use('/clients', require('./clients'));

module.exports = router;
