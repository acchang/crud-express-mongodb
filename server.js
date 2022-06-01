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
  })
  .catch(error => console.error(error))


// MongoClient.connect(connectionString, {
//     useUnifiedTopology: true
//   }, (err, client) => {
//   // 'mongodb+srv://NAME:PASS@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })

// MongoClient.connect(/* ... */)
//   .then(client => {
//     // ...
//     const db = client.db('star-wars-quotes')
//     app.use(/* ... */)
//     app.get(/* ... */)
//     app.post(/* ... */)
//     app.listen(/* ... */)
//   })
//   .catch(console.error)

//   app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body)
//       .then(result => {
//         console.log(result)
//       })
//       .catch(error => console.error(error))
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