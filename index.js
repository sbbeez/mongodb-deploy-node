const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hey you!!!");
});

app.listen(3000);
