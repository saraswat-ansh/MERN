const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User GET route');
});

router.get('/customer', (req, res) => {
    res.send('customer GET route');
});

module.exports = router;