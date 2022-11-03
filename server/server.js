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
    try{
        const sessions = await db('sessions-table')
            .select('*')
            .where('firebaseId', user)
        const payload = req.body
        console.log(payload)
        sessions.push(payload);
        res.status(201).send("new entry was successfully added!", sessions)
    } catch(err) {
        res.status(500).send(err);
    }
  })
 
//LEADERBOARD
  //get names
  //get levels
  //get experience

  //add points for every study session.
  app.patch("/level")

//NAMES
  //get all users 
//   app.get("/users", async (req, res) => {
//     try {
//       const users = await db('user_table')
//         .select('*')
//         .timeout(1500);
//         users.length > 0
//         ? res.status(200).send(users)
//         : res.status(404).send("no users found")
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })

  
//   app.get("/user/names", async (req, res) => {
//     try {
//       const users = await db('user_table')
//         .select('first_name', 'last_name')
//         .timeout(1500);
//         users.length > 0
//         ? res.status(200).send(users)
//         : res.status(404).send("sorry, no users found")
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })

  
//   app.get("/time/study", async (req, res) => {
//     try {
//       const times = await db('study_time_table')
//         .select('*')
//         .timeout(1500);
//         times.length > 0
//         ? res.status(200).send(times)
//         : res.status(404).send("sorry, no times found")
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })
  
  
//   app.get('/time/total', async (req, res) => {
//     try {
//         const allTimes = 
//         res.status(200).send()
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })
  
//   //get all rest times
//   app.get("/time/rest", async (req, res) => {
//     try {
//       const times = await db('study_time_table')
//         .select('*')
//         .timeout(1500);
//         times.length > 0
//         ? res.status(200).send(times)
//         : res.status(404).send("sorry, no times found")
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })

 
//   app.get("/user/:id/study", async(req, res) => {
//     try{
//       const id = req.params.id;
       
//       const join = await db('study_time_table')
//         .select("time_start", "time_end") 
//         .where({'user_id':id })
//         .join('user_table', 'user_table.id', '=', 'study_time_table.id')
        
//         console.log(id, join);
    
    
//         res.status(200).send(join);
//     } catch(err) {
//         res.status(500).send(err);
//     }
//   })



//   //add new user INCOMPLETE
//   app.post("/users/new", async (req, res) => {
//     const newUser = req.body;
//     const users = await db('user_table').select('*');
//     db.insert(req.body).returning('*').into()
//     console.log(req.body);
//     res.status(201).send(users);
//   })

// //get a particular user
// app.get('/users/:name', async (req, res) => {
//     const name = req.params.name;
//     const users = await db('user_table').select('*');
//     console.log(users[name]);
//     res.status(200).send(users[name])
// })


  return app;
}

module.exports = setupServer;
