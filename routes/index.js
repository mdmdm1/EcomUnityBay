const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products", auth, productController.createProduct);
router.put("/products/:id", auth, productController.updateProduct);
router.delete("/products/:id", auth, productController.deleteProduct);

module.exports = router;
