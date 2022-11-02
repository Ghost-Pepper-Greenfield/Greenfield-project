const express = require("express");
const path = require("path");

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("banana🍌");
  });

  return app;
}

module.exports = setupServer;
