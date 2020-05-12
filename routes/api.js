var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var posturl = require('../controller/linkcntrl');

router.post('/shorten',urlencodedParser,posturl.posturl)


module.exports = router;