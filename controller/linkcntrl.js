const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/link');
// const baseUrl = require('../config/baseurl').baseurl;

exports.posturl = async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = require('../config/baseurl').baseurl;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    };

    //Create url code
    const urlCode = shortid.generate();

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if (url) {
                res.json(url);
            }
            else {
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }

        } catch (err) {
            console.log(err);
            res.status(500).json('Server error')
        }
    }
    else {
        res.status(401).json('Invalid long url');
    }
}