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
const productRoutes = require("./routes/product.routes")
app.use("/api", isAuthenticated, productRoutes)

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Error Handler
require("./error-handling")(app);

module.exports = app;
