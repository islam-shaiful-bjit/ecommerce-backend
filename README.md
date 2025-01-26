# E-commerce Backend API

## Overview
This is the backend API for an e-commerce application. It provides endpoints for user authentication, product management, and cart management.

## Base URL
http://localhost:3000

## Endpoints

### Authentication

#### Register
- **URL**: `/auth/register`
- **Method**: `POST`
- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
	"username": "string",
	"password": "string",
	"role": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "integer",
      "username": "string",
      "role": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  }
  ```

