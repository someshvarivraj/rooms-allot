const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });
const verifyToken = (req, res,next) => {
  console.log("verifyTOken");
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data (user_id, username) to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
module.exports = verifyToken;
