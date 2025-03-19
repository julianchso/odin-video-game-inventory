import { Router } from 'express';
import gamesController from '../controller/gamesController.js';

// games
gamesRouter.get('/', gamesController.itemGet);
gamesRouter.post('/add', gamesController.addItemPost);

export default gamesRouter;
