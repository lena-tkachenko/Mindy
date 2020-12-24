const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;
const blogRoutes = require('../routes/blogRoutes');

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname,'index.html'), function (err, data) {
        if (err) {
            throw(err);
        } else {
            res.end(data)
        }
    })
});

app.use(blogRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});