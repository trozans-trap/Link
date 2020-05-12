const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/link');
const baseUrl = require('../config/baseurl')

exports.posturl = (req,res)=>{
    const { longUrl } = req.body;
    const baseUrl = require('../config/baseurl');

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }

    //Create url code
 }