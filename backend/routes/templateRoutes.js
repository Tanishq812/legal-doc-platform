const express = require("express");
const router = express.Router();
const Template = require("../models/Template");

// Get all templates
router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Upload new template
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newTemplate = new Template({ title, content });
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update a template by ID
router.put("/:id", async (req, res) => {
  const { title, content } = req.body;

  try {
    const updated = await Template.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a template by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Template.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Template deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
