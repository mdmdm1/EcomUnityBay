const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/role");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post(
  "/products",
  auth,
  requireRole("admin"),
  productController.createProduct
);
router.put(
  "/products/:id",
  auth,
  requireRole("admin"),
  productController.updateProduct
);
router.delete(
  "/products/:id",
  auth,
  requireRole("admin"),
  productController.deleteProduct
);

module.exports = router;
