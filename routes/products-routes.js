const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts } = require("../controllers/product-controller");

// POST new product to DB
router.post("/create", createProduct);

// GET all products
router.get("/all", getAllProducts);

module.exports = router;
