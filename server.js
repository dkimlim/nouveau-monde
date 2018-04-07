const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;
const game = require('./random-game.js');


app.get('/api/new_game', (req, res) => {
  res.send(game());
});

app.listen(port, () => console.log(`Listening on port ${port}`));