import express from "express";
import { getWeatherData, getFlowerData } from "../controllers/controller.js";
import { validateCityName, validateFlowerName } from "../middleware/validators.js";

const router = express.Router();

// Weather route with city validation
router.get("/weather/:city", validateCityName, getWeatherData);

// Flower route with flower validation
router.get("/flower/:flower", validateFlowerName, getFlowerData);

export default router;
