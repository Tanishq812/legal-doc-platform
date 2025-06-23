const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // raw .docx as text or formatted HTML
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Template", TemplateSchema);
