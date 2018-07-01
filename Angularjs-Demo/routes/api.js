const express = require('express');
const multer = require('multer');
const http = require('https');

const router = express.Router();

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count

router.get('/readme', (req, res, next) => {
    return http.get({
        host: 'https://librivox.org/api/feed/audiobooks',
        path: '/?&format=json'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            res.send(parsed.JSON);
            // callback({
            //     email: parsed.email,
            //     password: parsed.pass
            // });
        });
    });

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

module.exports = router;