const express = require('express');
const indexController = require('../controllers/indexController');

// Initialize express route
const router = express.Router();

router.route('/').get(indexController.getIndex);

module.exports = router;
