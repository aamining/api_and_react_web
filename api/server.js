//const app = require('./app');
const express = require('express');
const app = express();
const Movie = require('./models/movie');
const Person = require('./models/person');
//const router = express.Router();

// const moviesRouter = require('./routes/movies');
// app.use('/movies',moviesRouter);

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
