var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var getUrl = require('../controller/main');
var postUrl = require('../controller/linkcntrl');

router.get('/:code',urlencodedParser,getUrl.geturl)

router.post('/shorten',urlencodedParser,postUrl.posturl)


module.exports = router;