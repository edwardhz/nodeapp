const express = require('express');
const { searchRestaurants } = require('../controllers/restaurantController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/search', auth, searchRestaurants);

module.exports = router;
