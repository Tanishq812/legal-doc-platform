const express = require("express");
const router = express.Router();
const HelloSign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });

router.post("/send", async (req, res) => {
  const { signerEmail, signerName, fileUrl } = req.body;

  try {
    const response = await HelloSign.signatureRequest.send({
      test_mode: 1,
      title: "Legal Document Signing",
      subject: "Please sign this document",
      message: "Kindly review and sign.",
      signers: [
        {
          email_address: signerEmail,
          name: signerName,
        },
      ],
      file_url: [fileUrl], // should be a public .docx link
    });

    res.json({ message: "Signature request sent!", data: response });
  } catch (err) {
    console.error("HelloSign Error:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
