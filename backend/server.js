const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const connectDB = require('./config/db')
const userRoutes = require('./routes/user.routes')
const app = express();
dotenv.config();
connectDB();
app.use(express.json())


app.get('/', (req, res)=> {
      res.send('Welcome')
})

app.get('/api/notes', (req, res)=> {
      res.send(notes)
})

app.get('/api/notes/:id', (req, res)=> {
      const note = notes.find(note=>note._id === req.params.id);
      if (note) {
            res.send(note);
      } else {
            res.send('No Note Found.......')
      }
})

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Serverr starte on port ${PORT}`))