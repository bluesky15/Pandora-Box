"use strict";
//imports
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
//app.use('static',express.static(path.join(__dirname, 'scripts')));

//import the api routes.
const api = require('./routes/api');
app.use('/api', api);


app.listen(3000, function (err) {
    if (err) {
        console.log("unable to start server.");
    }else{
        console.log("server started at port 3000");
    }
});


