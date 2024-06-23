const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const port = process.env.port || 3000;

const corsOptions = {
  origin: "https://concierge-weld.vercel.app/",
  methods: "GET",
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// app.get("/data", (req, res) => {
//   res.sendFile(path.join(__dirname, "data.json"));
// });

app.get("/data", (req, res) => {
  const filePath = path.join(__dirname, "data.json");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("error reading data file");
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error("error parsing data", error);
      res.status(500).send("error parsing data");
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("not good");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
