require("dotenv").config({ path: "../.env" });

const esignRoutes = require("./routes/esignRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const driveImportRoute = require("./routes/driveImportRoute");
app.use("/api/drive", driveImportRoute);


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const templateRoutes = require("./routes/templateRoutes");
app.use("/api/templates", templateRoutes);
app.use("/api/esign", esignRoutes);
app.use("/api/ai", aiRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
