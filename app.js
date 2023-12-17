const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
//DB connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("ERROR IN DATABASE CONNECTION");
  });

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
