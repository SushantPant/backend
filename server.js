const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParse = require("cookie-parser");
require("dotenv").config();

mongoose
<<<<<<< HEAD
  .connect(process.env.MONGO_URI)
=======
  .connect(
    *
  )
>>>>>>> 6fba4e2426f93036c33545dd3a02511f536c791b
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
