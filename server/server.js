const express = require("express");
const path = require("path");
const db = require('../db/knex');
const bodyParser = require('body-parser');


function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("anything you're looking for in particular? in the meantime, here's a banana🍌");
  });

  //will get all sessions from the corresponding firebase ID string
  app.get('/:user/sessions', async (req,res) => {
    const user = req.params.user;
    try{
      const sessions = await db('sessions_table')
        .select('*')
        .where('firebaseId',user)
      res.send(sessions);
    }catch(err){
        res.status(500).send(err);
    }
  })

  //POST a time onto log of all sessions
  app.post('/new-session', async (req, res) => {
    try{
      const payload = req.body;
      const addSession = await db('sessions_table')
        .select('*')
        .insert(payload);
      res.status(201).send("saved!");
    } catch(err) {
      res.status(500).send(err);
    }
    }
  )

//LEADERBOARD
  app.get('/leaderboard', async (req, res) => {
    try{
      const leaderboard = await db('sessions_table')
        .select('firebaseId')
        .sum('duration')
        .groupBy('firebaseId')
      res.status(200).send(leaderboard);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  //add points for every study session.
  app.patch("/level")

  return app;
}

module.exports = setupServer;
