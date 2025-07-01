const express = require('express');
const router = express.Router();
//ht
router.get('/user', (req, res) => {
    res.send('User GET route');
});
//ht
router.get('/customer', (req, res) => {
    res.send('customer GET route');
});

module.exports = router;