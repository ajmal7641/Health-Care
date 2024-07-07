import express from "express";
import { login, register } from "../Controllers/authController.js"; // Ensure the correct path and .js extension

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;