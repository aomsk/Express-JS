const express = require("express");
const router = express.Router();
const Model = require("../models/model");

// Post Method create
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json({ data: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Model.findById(id);
    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update by ID Method
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updateData, options);
    res.send({ message: "update data sucessfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Model.findByIdAndDelete(id);
    res.send({ message: `Document with ${data.name} has been deleted` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
