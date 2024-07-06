# EcomUnityBay

EcomUnityBay is an e-commerce platform that allows users to register, login, and manage products. This documentation provides a guide to the setup, usage, and API endpoints of the project.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/EcomUnityBay.git
   ```
2. Navigate to the project directory:
   bash

cd EcomUnityBay

3. Install dependencies:
   bash

npm install

## Usage:

Start the server:

```bash
node index.js
```

Access the application at http://localhost:3000.
API Endpoints
User Authentication
Register

URL: /api/auth/register
Method: POST
Body:

json

{
"username": "testUser",
"mail": "testuser@test.com",
"password": "test123"
}
Login

URL: /api/auth/login
Method: POST
Body:
json

{
"mail": "testuser@test.com",
"password": "test123"
}
Product Management
Get All Products

URL: /api/products
Method: GET
Create Product

URL: /api/products
Method: POST
Body:
json

{
"name": "New Product",
"price": 49.99,
"description": "Description of the new product",
"category": "books",
"stock": 100
}
Requires: Admin role

### Contributing

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-branch.
Submit a pull request.
