import { Router } from 'express';
import genreController from '../controller/genreController.js';

const genreRouter = Router();

genreRouter.get('/', genreController.genreGet);
genreRouter.get('/add', genreController.genreAddGet);
genreRouter.post('/add', genreController.genreAddPost);

export default genreRouter;
