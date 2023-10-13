import express from "express";
import { putOnceUser, signin, signup } from "../controllers/user.js";
import{ getAll, addOnce,getOnce,putOnce,patchOnce,deleteOnce, ajoutergame} from '../controllers/game.js';

const router = express.Router();
router
.route("/signin").post(signin)
router
.route("/signup").post(signup);
router
.route("/modifierUser").put(putOnceUser);
router.route('/ajouter_game').post(ajoutergame);
router
.route('/:title')
.get(getOnce)
.put(putOnce)
.patch(patchOnce)
.delete(deleteOnce);
export default router;