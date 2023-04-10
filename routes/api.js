import express from "express";
import { authenticate } from "../controllers/api.js";
import { authenticateDataMiddleware } from "../middlewares/validator.js";

const router = express.Router();

router.post("/authenticate", authenticateDataMiddleware, authenticate);

export default router;
