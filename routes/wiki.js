const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const bodyParser = require('body-parser')

router.get("/", (req, res) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res) => {
  res.send("got to POST /wiki/");
  console.log(req.body);
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
