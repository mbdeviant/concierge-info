const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const IP = process.env.IP || "0.0.0.0";

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("not good");
});

app.listen(port, IP, () => {
  console.log(`Server is running on http://${IP}:${port}`);
});
