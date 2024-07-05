import express from "express"
import { login } from "../Controllers/authController"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)

module.exports = router