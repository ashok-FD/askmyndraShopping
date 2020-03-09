const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartContoller');
const checkAuth = require('../middleware/CheckAuth');

router.post('/createCart',CartController.cartCreate);
router.get('/getCart/:id',CartController.getAll);

// router.get('/getCart',CartController.getAll);
module.exports = router;