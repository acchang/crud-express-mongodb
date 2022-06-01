const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
// const connectionString = 'mongodb+srv://Bloop:bleep@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

// from https://discord.com/channels/735923219315425401/980280502244212786/980298549889736744
const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;

console.log(`${process.env.USERNAME}`, `${process.env.PW}`);

// All your handlers here...

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
  // 'mongodb+srv://NAME:PASS@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority'

    if (err) return console.error(err)
    console.log('Connected to Database')
  })


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