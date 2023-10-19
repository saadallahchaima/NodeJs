import express from 'express';

import { signin, signup, putOnce } from '../controllers/user.js';
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';

const router = express.Router();

router
  .route('/signin')
  .post(multer,
    body('avatar').isLength({max: 512 }),signin);

router
  .route('/signup')
  .post(signup);

router
  .route('/:id')
  .put(putOnce);
  
export default router;