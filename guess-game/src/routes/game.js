const express = require('express');
const controller = require('../controllers/gameController');

const router = express.Router();

router.get('/', controller.show);
router.post('/guess', controller.guess);
router.post('/reset', controller.reset);

module.exports = router;
