// routes/dashboardRoutes.js
const express = require("express");
const verifyToken = require("../middleware/authMiddleware"); // Import the middleware
const router = express.Router();

router.get("/verify-token", verifyToken, (req, res) => {
  console.log("verify login");
  // This route is protected, only accessible if the user is authenticated
  res.status(200).json({
    success: true,
    message: "Token is valid. User is authenticated.",
    token: req.cookies.token, // Return the token
  });
});

module.exports = router;
