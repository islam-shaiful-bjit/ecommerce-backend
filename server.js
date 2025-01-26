const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./db'); // Import the sequelize instance
const User = require('./models/User'); // Import the User model
const Product = require('./models/Product'); // Import the Product model
const Cart = require('./models/Cart'); // Import the Cart model
const { swaggerUi, specs } = require('./swagger');

// Middleware
app.use(express.json());
// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

// Use routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Backend!');
});

// Synchronize models with the database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});