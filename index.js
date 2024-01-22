const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const router = require("./UserRoutes");

const port = 1000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  
});

app.listen(port, () => {
  console.log(`server is working on port : ${port}`);
});
