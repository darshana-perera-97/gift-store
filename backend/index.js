const express = require("express");
const cors = require("cors"); // Import CORS

const app = express();
const PORT = 5005; // Updated port

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to the Node.js Backend.");
});

// API route example
app.get("/api/data", (req, res) => {
  res.json({ message: "This is sample API data" });
});

// POST request example
app.post("/api/submit", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Received data: ${name}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
