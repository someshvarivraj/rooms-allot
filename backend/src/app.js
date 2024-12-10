require("dotenv").config({ path: "../.env" });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Allow cookies
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);
app.use(dashboardRoutes);
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
