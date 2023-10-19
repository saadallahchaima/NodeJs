import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
const app = express();

const port = process.env.PORT || 9090;
const databaseName = 'workshopgamix2122';
import gameRoutes from './routes/game.js'; // importer le router du fichier routes/game.js
import { errorHandler } from './middlewares/error-handler.js';
import morgan from 'morgan';
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
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/img',express.static('public/images'));
//app.use(express.static('public'));
/*app.use(express.json()); // Pour analyser (parsing) les requetes application/json
app.use((req,res,next) => {
console.log("MiddleWare just run ! ");
//next();
});
// préfixe chaque route ici avec /game
app.use('/gse', (req,res, next) => {
    console.log("MiddleWare just run on gse route ! ");
next();
}); // Utiliser les routes créés
//app.use('/game',gameRoutes);
//app.use(errorHandler)
*/
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});