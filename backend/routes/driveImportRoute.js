const express = require("express");
const { google } = require("googleapis");
const axios = require("axios");
const mammoth = require("mammoth");
const Template = require("../models/Template");

const router = express.Router();

// POST /api/drive/import
router.post("/import", async (req, res) => {
  const { fileId, accessToken, title } = req.body;

  try {
    const driveRes = await axios.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        responseType: "arraybuffer",
      }
    );

    const result = await mammoth.extractRawText({ buffer: driveRes.data });

    const newTemplate = new Template({
      title: title || "Imported Template",
      content: result.value,
    });

    await newTemplate.save();
    res.json({ message: "Template imported successfully", template: newTemplate });
  } catch (err) {
    console.error("Drive import failed:", err);
    res.status(500).json({ message: "Failed to import template." });
  }
});

module.exports = router;
