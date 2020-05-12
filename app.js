var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));

app.use('/',require('./routes/api'));



var Port = process.env.PORT || 4000;
app.listen( Port , ()=>{
    console.log(`Running Succesfully on ${Port}`);
} )
