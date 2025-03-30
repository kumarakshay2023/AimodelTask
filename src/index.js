import express from "express";
import { config } from "./configs/config.js";
import twitterPostRoutes  from "./routes/twitter.route.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/twitter", twitterPostRoutes);

// Start server
app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
});
