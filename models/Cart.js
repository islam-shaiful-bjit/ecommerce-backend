const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define Cart model
const Cart = sequelize.define('Cart', {
  userId: {
	type: DataTypes.INTEGER,
	allowNull: false,
  },
  productId: {
	type: DataTypes.INTEGER,
	allowNull: false,
  },
  quantity: {
	type: DataTypes.INTEGER,
	allowNull: false,
	defaultValue: 1,
  },
});

module.exports = Cart;