//const app = require('./app');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Movie = require('./models/movie');
const Person = require('./models/person');

app.use(require('cookie-parser')());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  Movie.find()
    // .populate('director')
    // .populate('crew.person')
    // .populate('cast.actor')
    // .populate('cast.character')
    .then(movies => res.json(movies))
    .catch(error => res.json({ error }))
});

app.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then((movie) => {
      res.status(201).json(movie).end();
    })
    .catch(error => res.json({ error }))
});

const port = 7000;
app.listen(port,()=>{
  console.log(`Movies API server running ${port}`);
});
