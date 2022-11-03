const express = require("express");
const path = require("path");
const db = require('../db/knex');

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("anything you're looking for in particular? in the meantime, here's a banana🍌");
  });
//NAMES
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

  //get all names only (full names)
  app.get("/users/name", async (req, res) => {
    try {
      const users = await db('user_table')
        .select('first_name', 'last_name')
        .timeout(1500);
        users.length > 0
        ? res.status(200).send(users)
        : res.status(404).send("sorry, no users found")
    } catch(err) {
        res.status(500).send(err);
    }
  })

  //get all study times
  app.get("/time/study", async (req, res) => {
    try {
        const times = await db('study_time_table')
            .select('*')
            .timeout(1500);
            times.length > 0
            ? res.status(200).send(times)
            : res.status(404).send("sorry, no times found")
    } catch(err) {
        res.status(500).send(err);
    }
  })

  //get all rest times
  app.get("/time/rest", async (req, res) => {
    try {
        const times = await db('study_time_table')
            .select('*')
            .timeout(1500);
            times.length > 0
            ? res.status(200).send(times)
            : res.status(404).send("sorry, no times found")
    } catch(err) {
        res.status(500).send(err);
    }
  })

  //add new user
  app.post("/users/new", async (req, res) => {
    const newUser = req.body;
    const users = await db('user_table').select('*');
    db.insert(req.body).returning('*').into()
    console.log(req.body);
    res.status(201).send(users);
  })

//get a particular user
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const users = await db('user_table').select('*');
    console.log(users[id]);
    res.status(200).send(users[id])
})
//LEADERBOARD
  //get names
  //get levels
  //get experience

  //add points for every study session.
  app.patch("/level")
  return app;
}

module.exports = setupServer;
