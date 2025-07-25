// //const express = require("express");

// import express from "express";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.route.js";

// dotenv.config();
// const app = express();

// const PORT = process.env.PORT;
// app.use("/api/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log("server is running on port PORT", +PORT);
// });
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

// Load environment variables from .env
dotenv.config();

const app = express();

// Use the PORT from .env or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware (optional): parse JSON
app.use(express.json());

// Route
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
