import { Router } from 'express';

const gamesRouter = Router();

gamesRouter.get('/', (req, res) => {
  console.log('get home page');
});

gamesRouter.get('/new', (req, res) => {
  console.log('display form to insert new video game with name, description, category');
});

gamesRouter.post('/new', (req, res) => {
  console.log('video game to be saved: ', req.body.name);
});

export default gamesRouter;
