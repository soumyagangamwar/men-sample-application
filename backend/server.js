const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const connectDB = require('./config/db')

const app = express();
dotenv.config();
connectDB();
app.get('/', (req, res)=> {
      res.send('Welcome')
})

app.get('/notes', (req, res)=> {
      res.send(notes)
})

app.get('/notes/:id', (req, res)=> {
      const note = notes.find(note=>note._id === req.params.id);
      if (note) {
            res.send(note);
      } else {
            res.send('No Note Found.......')
      }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Serverr starte on port ${PORT}`))