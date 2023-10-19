import express from 'express';
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';

import { getAll, addOnce, getOnce, putOnce } from '../controllers/game.js';
  
const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(multer,
    body('image').isLenth({max: 5}),
    addOnce);

router
  .route('/:id')
  .get(getOnce)
  .put(putOnce);
  
export default router;