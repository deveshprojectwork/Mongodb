const express = require("express"); //including express module
const app = express();

app.use("/", (req, res) => {
  res.send("App is running");
});

module.exports = app;
