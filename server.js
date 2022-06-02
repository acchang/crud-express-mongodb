const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
      .then(results => {
        // console.log(results)
        res.render('index.ejs', { quotes: results })
      })
      .catch(error => console.error(error))
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
