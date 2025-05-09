import { Router } from 'express';
import gamesController from '../controller/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.gamesGet);
gamesRouter.get('/add', gamesController.gamesAddGet);
gamesRouter.post('/add', gamesController.gamesAddPost);
gamesRouter.get('/:name/edit', gamesController.gamesEdit);
gamesRouter.post('/:name/delete', gamesController.gamesDelete);

export default gamesRouter;
