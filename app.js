import express, { urlencoded } from 'express';
import gamesRouter from './server/src/routes/gamesRouter.js';

const app = express();

app.set('view engine', 'ejs');
app.use(urlencoded({ extended: true }));
app.use('/', gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
