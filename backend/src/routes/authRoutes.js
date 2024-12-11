const express = require("express");
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
require("dotenv").config({ path: "../../.env" });
const router = express.Router();

// Signup route
router.post("/signup", authController.signup);

// Login route
router.post("/signin", authController.signin);

module.exports = router;
