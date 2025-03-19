import { Router } from 'express';
import genreController from '../controller/genreController.js';

const genreRouter = Router();

// Genre
genreRouter.get('/', genreController.genreGet);
genreRouter.post('/add', genreController.genrePost);

export default genreRouter;
