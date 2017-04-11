const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are in trang A');
});

module.exports = router;
