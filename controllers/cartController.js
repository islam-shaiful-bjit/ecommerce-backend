// controllers/cartController.js

const Cart = require('../models/Cart');

// Controller function to add an item to the cart
const addItemToCart = async (req, res) => {
  try {
	const { userId, productId, quantity } = req.body;
	const cartItem = new Cart({ userId, productId, quantity });
	await cartItem.save();
	res.status(201).json(cartItem);
  } catch (error) {
	res.status(500).json({ message: 'Error adding item to cart', error });
  }
};

// Controller function to remove an item from the cart
const removeItemFromCart = async (req, res) => {
  try {
	const cartItem = await Cart.findByPk(req.params.id);
	if (!cartItem) {
	  return res.status(404).json({ message: 'Cart item not found' });
	}
	await cartItem.destroy();
	res.json({ message: 'Item removed from cart' });
  } catch (error) {
	res.status(500).json({ message: 'Error removing item from cart', error });
  }
};

// Controller function to update the quantity of an item in the cart
const updateItemQuantity = async (req, res) => {
  try {
	const { quantity } = req.body;
	const cartItem = await Cart.findByPk(req.params.id);
	if (!cartItem) {
	  return res.status(404).json({ message: 'Cart item not found' });
	}
	cartItem.quantity = quantity;
	await cartItem.save();
	res.json(cartItem);
  } catch (error) {
	res.status(500).json({ message: 'Error updating item quantity', error });
  }
};

// Controller function to get cart details
const getCartDetails = async (req, res) => {
  try {
	const cartItems = await Cart.findAll({ where: { userId: req.params.userId } });
	res.json(cartItems);
  } catch (error) {
	res.status(500).json({ message: 'Error fetching cart details', error });
  }
};

// Controller function to update the quantity of a product in the cart
const updateProductQuantity = async (req, res) => {
  try {
	const { userId, productId, quantity } = req.body;
	const cartItem = await Cart.findOneAndUpdate(
	  { userId: userId, productId: productId },
	  { quantity: quantity },
	  { new: true }
	);

	if (cartItem) {
	  res.status(200).json({ message: 'Product quantity updated successfully', cartItem });
	} else {
	  res.status(404).json({ message: 'Product not found in cart' });
	}
  } catch (error) {
	res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

module.exports = {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  getCartDetails,
  updateProductQuantity
};