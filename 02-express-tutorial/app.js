const express = require("express");
const app = express();
let { people } = require("./data");

//static assets

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  res.send("Success");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000....");
});
