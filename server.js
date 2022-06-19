const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
// const bodyParser= require('body-parser');
const PORT = 2121
require('dotenv').config()

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);

// const dotenv = require('dotenv') // .env file
// dotenv.config() // using .env
// const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'star-wars-quotes'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
.then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName)
})
    
// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('star-wars-quotes')
//     const quotesCollection = db.collection('quotes')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// what is the difference between express and bodyparser here?


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray()
  .then(results => {
    // console.log(results)
    res.render('index.ejs', { quotes: results })
  })
  .catch(error => console.error(error))
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/quotes', (req, res) => {
  db.collection('quotes').findOneAndUpdate(
    { name: 'yoda' },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    {
      upsert: true
    }
  )
    .then(result => {
      // console.log(result)
      res.json('Success')
    })
    .catch(error => console.error(error))
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').deleteOne(
    { name: req.body.name },
    )
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('No quote to delete')
      }
      res.json(`Deleted Darth Vadar's quote`)
    })
    .catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})









// const express = require('express');
// const bodyParser= require('body-parser');
// const MongoClient = require('mongodb').MongoClient
// const app = express();


// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);


// const dotenv = require('dotenv') // .env file
// dotenv.config() // using .env
// const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PW}@cluster0.jqbcy.mongodb.net/?retryWrites=true&w=majority`;



// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('star-wars-quotes')
//     const quotesCollection = db.collection('quotes')

//     app.set('view engine', 'ejs')
//     app.use(bodyParser.urlencoded({ extended: true }))
//     app.use(express.static('public'))
//     app.use(bodyParser.json())


//     app.get('/', (req, res) => {
//       db.collection('quotes').find().toArray()
//       .then(results => {
//         // console.log(results)
//         res.render('index.ejs', { quotes: results })
//       })
//       .catch(error => console.error(error))
//     })

//     app.post('/quotes', (req, res) => {
//       quotesCollection.insertOne(req.body)
//         .then(result => {
//           res.redirect('/')
//         })
//         .catch(error => console.error(error))
//     })

//     app.put('/quotes', (req, res) => {
//       quotesCollection.findOneAndUpdate(
//         { name: 'yoda' },
//         {
//           $set: {
//             name: req.body.name,
//             quote: req.body.quote
//           }
//         },
//         {
//           upsert: true
//         }
//       )
//         .then(result => {
//           // console.log(result)
//           res.json('Success')
//         })
//         .catch(error => console.error(error))
//     })

//     app.delete('/quotes', (req, res) => {
//       quotesCollection.deleteOne(
//         { name: req.body.name },
//         )
//         .then(result => {
//           if (result.deletedCount === 0) {
//             return res.json('No quote to delete')
//           }
//           res.json(`Deleted Darth Vadar's quote`)
//         })
//         .catch(error => console.error(error))
//     })


//   })
//   .catch(console.error)




