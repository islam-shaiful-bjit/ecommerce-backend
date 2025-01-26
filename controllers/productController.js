// controllers/productController.js

const Product = require('../models/Product');

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Controller function to add a new product
const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const newProduct = new Product({ name, price, description, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};