const express = require('express');
const gameRoutes = require('./game');

const router = express.Router();

router.use('/', gameRoutes);

module.exports = router;
