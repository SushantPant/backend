const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParse = require("cookie-parser");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongo db connected"))
  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParse());
app.use(express.json());

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
