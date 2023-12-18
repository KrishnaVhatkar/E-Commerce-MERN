import express from "express";
import routers from "./routers/index.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Ensure that process.env.API_URL is a valid path without a trailing slash
const apiUrl = process.env.API_URL || "";

// Mount the routers at the specified path
router.use(apiUrl, routers);

export default router;