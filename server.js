// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let party = [];

app.post("/add", (req, res) => {
  party.push(req.body.name);
  res.json({ success: true, party });
});

app.get("/party", (req, res) => {
  res.json(party);
});

app.listen(5000, () => console.log("Server running on 5000"));
