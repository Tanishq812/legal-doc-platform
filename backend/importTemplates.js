const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const mammoth = require("mammoth");
require("dotenv").config({ path: "../.env" });

const Template = require("./models/Template");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Directory where your DOCX files are stored
const templateDir = path.join(__dirname, "../templates");

async function importTemplates() {
  const files = fs.readdirSync(templateDir).filter((file) => file.endsWith(".docx"));

  for (const file of files) {
    const filePath = path.join(templateDir, file);
    const buffer = fs.readFileSync(filePath);

    try {
      const result = await mammoth.extractRawText({ buffer });
      const title = file.replace(".docx", "").replace(/[-_]/g, " ");
      const content = result.value;

      console.log(`📄 Extracted content for ${file}:\n`, content); // ✅ fixed

      await Template.create({ title, content });
      console.log(`✅ Imported: ${title}`);
    } catch (err) {
      console.error(`❌ Failed to import ${file}:`, err.message);
    }
  }

  mongoose.connection.close();
}

importTemplates(); // ✅ Move this to the bottom
