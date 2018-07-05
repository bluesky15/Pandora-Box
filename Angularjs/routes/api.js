const express = require('express');
const multer = require('multer');
const https = require('https');
const fs = require('fs');
const router = express.Router();

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3); 

//Field name and max count

router.get('/readme', (req, res, next) => {
    let data = makeHttpRequest(); 

    return res.send(JSON.parse(data));
});

router.post('/upload', (req, res, next) => {
      upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});

function makeHttpRequest(){
    let data = '';
    https.get('https://librivox.org/api/feed/audiobooks/?&format=json', (resp) => {
   

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        //console.log(data);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
return data;
}

module.exports = router;