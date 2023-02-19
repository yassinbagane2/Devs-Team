const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const connectDB = require("./config/db");

const port = process.env.PORT || 5019;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

// Authentification API
app.use("/api/auth", require("./routes/authRoutes"));

// Services API
app.use("/api/services", require("./routes/servicesRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at port ${port} 🚀`);
});
