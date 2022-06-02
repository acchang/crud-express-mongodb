const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;

// All your handlers here...


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
      .then(results => {
        console.log(results)
      })
      .catch(error => console.error(error))
      
      res.sendFile(`/Users/andrewchang/the_odin_project/crud-express-mongodb/index.html`)
      })
      
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
          // console.log(result)
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function() {
      console.log('listening on 3000')
    })

  })
  .catch(console.error)
