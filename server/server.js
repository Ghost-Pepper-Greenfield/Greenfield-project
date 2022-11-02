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
  //get all users 
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
  })

  //get all study times
  app.get("/times_studied", async (req, res) => {
    try {
        const times = await db('study_time_table')
            .select('*')
            .timeout(1500);
            times.length > 0
            ? res.status(200).send(times)
            : res.status(404).send("no times found")
    } catch(err) {
        res.status(500).send(err);
    }
  })


  return app;
}

module.exports = setupServer;
