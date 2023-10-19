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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});