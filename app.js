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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("not good");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
