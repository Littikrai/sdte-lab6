const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello This This");
});

module.exports = app;
