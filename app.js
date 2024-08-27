require("dotenv").config();
require("./db");
const express = require("express");


const app = express();

// Middleware config
require("./config")(app);

// Routes
const releaseRoutes = require("./routes/release.routes");
app.use("/api", releaseRoutes);
const productRoutes = require("./routes/product.routes")
app.use("/api", productRoutes)
const bioRoutes = require("./routes/bio.routes");
app.use("/api", bioRoutes)

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Error Handler
require("./error-handling")(app);

module.exports = app;
