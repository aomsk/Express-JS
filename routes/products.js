const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.js");

router.get("/", (req, res) => {
  Product.find().then((err, products) => {
    if (err) {
      res.send(err);
    }
    res.json(products);
  });
});

router.post("/", (req, res) => {});

module.exports = router;
