const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("Hello express!");
});
app.get("/help", (req, res) => {
  res.send("Help Page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.listen(3000, () => {
  console.log();
  console.log("Server is up on port 3000");
});
