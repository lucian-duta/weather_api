import express from "express";
import { getFlowerData } from "../controllers/flowerController.js";
import { validateFlowerName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the flower data based on the flower name
router.get("/flower/:flower", validateFlowerName, getFlowerData);



// We will export the router
export default router;
