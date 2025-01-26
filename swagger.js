// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
	openapi: '3.0.0',
	info: {
	  title: 'eCommerce API',
	  version: '1.0.0',
	  description: 'API documentation for the eCommerce application',
	},
	servers: [
	  {
		url: 'http://localhost:3000',
	  },
	],
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};