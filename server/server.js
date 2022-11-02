const express = require("express");
const path = require("path");
const db = require('../db/knex')

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("banana🍌");
  });

  app.get("/users", async (req, res) => {
    try {
        const users = await db('user_table')
            .select('*')
            .timeout(1500);
            users.length > 0
            ? res.status(200).send(users)
            : res.status(404).send("no users found")

    } catch(err) {
        res.status(500).send(err);
    }
    res.status(200).send();
  })

  return app;
}

module.exports = setupServer;
