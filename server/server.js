const express = require("express");
const path = require("path");
const db = require('../db/knex');
const bodyParser = require('body-parser');

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(bodyParser.urlencoded({ extended: false }));
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

  //POST a time onto user's log
  app.post('/:user/new-session', async (req, res) => {
    const user = req.params.user;
    const sessions = await db('sessions-table')
            .select('*')
            .where('firebaseId', user)
        const payload = req.body
        console.log(req.body);
    try {
        
        sessions.push(payload);
        res.status(201).send("new entry was successfully added!", sessions)
    } catch(err) {
        res.status(500).send(err);
    }
  })
 //post test
  app.post('/test', async (req, res) => {
    console.log(req.body)
    res.send(req.body).status(201);
  })
//get test
app.get('/test', async (req,res) => {
  const sessions = await db('sessions_table')
      .select('*')
  console.log(sessions)
  res.send(sessions);
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
