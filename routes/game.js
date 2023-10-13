import express from "express";
import{ getAll, addOnce} from '../controllers/game.js';
const router = express.Router();
router
.route('/')
.get(getAll)
.post(addOnce);

export default router;
