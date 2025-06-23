const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/suggest", async (req, res) => {
  const { clause } = req.body;

  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful legal assistant. Rewrite the clause in simpler and clearer legal language.",
        },
        {
          role: "user",
          content: clause,
        },
      ],
      temperature: 0.4,
      max_tokens: 300,
    });

    const suggestion = chat.choices[0].message.content.trim();
    res.json({ suggestion });
  } catch (err) {
    console.error("AI Error:", err.message);
    res.status(500).json({ message: "AI suggestion failed." });
  }
});

module.exports = router;
