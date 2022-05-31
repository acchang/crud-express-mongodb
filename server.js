console.log('May Node be with you')

const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://Andrew:Chang@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({ extended: true }))

// All your handlers here...


MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    'mongodb+srv://Andrew:Chang@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

    if (err) return console.error(err)
    console.log('Connected to Database')
  })


// app.get('/', (req, res) => {
//     res.send('Hello World')
//     })

// app.post('/quotes', (req, res) => {
//     console.log('Hellooooooooooooooooo!')
//   })


// MongoClient.connect('mongodb-connection-string', (err, client) => {
//     // ... do something here
//     'mongodb+srv://Andrew:Chang@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

//     if (err) return console.error(err)
//     console.log('Connected to Database')

//   })

// MongoClient.connect(connectionString, (err, client) => {
//     'mongodb+srv://Andrew:Chang@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'
//   })


app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req, res) => {
    res.sendFile(`/Users/andrewchang/the_odin_project/crud-express-mongodb/index.html`)
    })

app.post('/quotes', (req, res) => {
    console.log(req.body)
    })