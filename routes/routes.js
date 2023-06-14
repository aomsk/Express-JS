const express = require("express");
const router = express.Router();

// Post Method create
router.post("/post", (req, res) => {
  res.send("Post API");
});

// Get Method
router.get("/getAll", (req, res) => {
  res.send("Get API");
});

// Get by ID Method
router.get("/getOne/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

// Update by ID Method
router.patch("/post", (req, res) => {
  res.send("Update by ID API");
});

// Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
