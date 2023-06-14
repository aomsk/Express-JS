const express = require("express");
const router = express.Router();
const productModel = require("../model/products");

// POST new product to DB
router.post("/create", async (req, res) => {
  const { p_name, p_desc, p_price, p_amount } = req.body;
  const data = new productModel({
    p_name: p_name,
    p_desc: p_desc,
    p_price: p_price,
    p_amount: p_amount,
  });

  try {
    const newData = await data.save();
    res.status(200).json({ message: "Save new data to db sucessfuly", newProduct: newData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all products
router.get("/all", async (req, res) => {
  try {
    const data = await productModel.find();
    res.status(200).json({ message: "Get all products sucessfuly", products: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
