const express = require('express');
const router = express.Router();

const testData = [
    {
        id: 1,
        name: 'Hello, JavaScript'
    },
    {
        id: 2,
        name: 'Hello, React.js'
    },
    {
        id: 3,
        name: 'Hello, Node.js'
    }
];

router.get('/testData', (req, res) => {
    res.send(testData);
});

router.get('/testData/:id', (req, res) => {
    let data = testData.find( (data) =>
        data.id === Number( req.params.id )
    );
    res.send(data);
});

router.post('/testData', (req, res) => {
    res.send(testData);
});

router.put('/testData', function (req, res) {
    res.send(testData)
});

router.delete('/testData', function (req, res) {
    res.send(testData)
});

module.exports = router;
