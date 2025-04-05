const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Init express app
const app = express();

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running & DB connection is established!");
});

module.exports = app;
