const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/docs', express.static(path.join(__dirname, '/../doc')));

module.exports = router;