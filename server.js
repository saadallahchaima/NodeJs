import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'workshopgamix2122';
import gameRoutes from './routes/game.js'; // importer le router du fichier routes/game.js
mongoose.set('debug',true);
mongoose.Promise = global.Promise;
mongoose
.connect(`mongodb://0.0.0.0:27017/${databaseName}`)
.then(()=>{
  console.log(`connected to ${databaseName}`);
})
.catch(err => {
  console.log(err);
});


app.use(express.json()); // Pour analyser (parsing) les requetes application/json

// préfixe chaque route ici avec /game
app.use('/game', gameRoutes); // Utiliser les routes créés

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});