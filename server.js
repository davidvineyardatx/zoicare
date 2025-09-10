// server.js
import express from "express";
import cors from "cors";
import { clear } from "console";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint for signup
app.post("/api/signup", (req, res) => {
  const { formId, firstName, lastName, businessName, email } = req.body;

  if (!formId || !firstName || !lastName || !email) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Example: log the submission (replace with DB or API call)
  console.log("New signup:", {
    formId,
    firstName,
    lastName,
    businessName,
    email,
    timestamp: new Date().toISOString(),
  });

  return res.status(200).json({
    message: "Signup successful",
  });
});

app.listen(PORT, () =>
  console.log(`🚀 API running on http://localhost:${PORT}`)
);