const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("not good");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
