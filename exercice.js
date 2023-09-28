import express from 'express';
import fs from 'fs';

const app = express();
const hostname = '127.0.0.1';

const port = process.env.PORT || 9090;

const gamesData = JSON.parse(fs.readFileSync('SteamGames.json', 'utf8'));

class Game {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
//lista
app.get('/game', (req, res) => {
    res.status(200).json({message : gamesData});
});
app.get('/game/select/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const Games = gamesData.filter((game) => game.year > year);
  res.status(200).json(Games);
});

//nom
app.get('/game/:name', (req, res) => {
  const gameName = req.params.name;
  const game = gamesData.find((game) => game.name === gameName);

  if (game) {
    res.status(200).json(`The name of this game is ${req.params.name}`);
} else {
    res.status(404).json({message : 'ERREUR'});
  }
});
app.listen(port , hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    })
