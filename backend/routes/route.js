const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../frontend/views/index')
})

module.exports = router