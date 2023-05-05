const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
port = process.env.PORT || 5000;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@database.khjlk4g.mongodb.net/data?retryWrites=true&w=majority`
  )
  .then((conn) => {
    if (conn.connection.readyState === 1) {
      console.log("Connected successfully");
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
