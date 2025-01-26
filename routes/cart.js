const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const cartController = require('../controllers/cartController');

// Add item to cart
router.post('/', cartController.addItemToCart);

// Remove item from cart
router.delete('/:id', cartController.removeItemFromCart);

// Update item quantity in cart
router.put('/:id', cartController.updateItemQuantity);

// Get cart details
router.get('/:userId', cartController.getCartDetails);

// Define the PUT route for updating the quantity of a product in the cart
router.put('/update', cartController.updateProductQuantity);

module.exports = router;