const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const stageRouter = require("./routes/stage-router");

const app = express();
const apiPort = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/hey", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", stageRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
