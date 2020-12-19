const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();
const port = process.env.PORT;

app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err);
        } else {
            res.send(data)
        }
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});