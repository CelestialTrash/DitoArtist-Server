require("dotenv").config();
require("./db");
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware")


const app = express();

// Middleware config
require("./config")(app);

// Routes
const releaseRoutes = require("./routes/release.routes");
app.use("/api", isAuthenticated, releaseRoutes);
const catalogRoutes = require("./routes/catalog.routes")
app.use("/api", isAuthenticated, catalogRoutes)

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Error Handler
require("./error-handling")(app);

module.exports = app;
