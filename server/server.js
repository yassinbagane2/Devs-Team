const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5019;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("jawk bhy!!");
});

// Authentification API
app.use("/api/auth", require("./routes/authRoutes"));

// Services API
app.use("/api/services", require("./routes/servicesRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at port ${port} 🚀`);
});
