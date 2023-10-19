import express from 'express';
import { body } from 'express-validator';
import { getAll, addOnce, getOnce,
  putOnce, patchOnce, deleteOnce, signup, signin } from '../controllers/game.js';
import multer from '../middlewares/multer-config.js';

/**
 * Router est un objet de base sur le module express.
 * Cet objet a des méthodes similaires (.get, .post, .patch, .delete)
 * à l'objet app de type "express()" que nous avons utilisé précédemment.
 */
const router = express.Router();

// Déclarer d'abord la route, puis toutes les méthodes dessus (préfixe spécifié dans server.js)
router
  .route('/')
  .get(getAll)
  .post(
    multer,
    body('name').isLength({min: 5}),
    body('year').isNumeric(),
    addOnce
  );

router
  .route('/:name')
  .get(getOnce)
  .put(putOnce)
  .patch(patchOnce)
  .delete(deleteOnce);


/**
 * Maintenant que nous avons créé toutes ces routes,
 * exportons ce module pour l'utiliser dans server.js
 * puisque c'est lui notre entrée principale "main".
 */
export default router;