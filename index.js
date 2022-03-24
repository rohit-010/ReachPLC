const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json()); // Middleware for request to json
app.use(cors());

const placeList = {}; // In memobry object

const PORT = process.env.PORT || 5000;

app.get("/places", (req, res) => {
  res.send(placeList);
});

app.post("/places", (req, res) => {
  const { text } = req.body;
  console.log(text);
  const id = randomBytes(4).toString("hex");
  placeList[id] = {
    id,
    text,
  };
  res.status(201).send({});
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
