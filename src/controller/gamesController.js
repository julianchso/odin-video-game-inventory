import { getAllGames, getAllGenres, addNewGame } from '../db/queries.js';

const gamesGet = async (req, res) => {
  const videoGames = await getAllGames();
  res.render('games/gameView', {
    title: 'Video Games List',
    videoGames: videoGames,
  });
};

const gamesAddGet = async (req, res) => {
  const genre = await getAllGenres();
  res.render('games/gameAdd', {
    title: 'Add Video Game',
    genre: genre,
  });
};

const gamesAddPost = (req, res) => {
  let { videoGame, genre } = req.body;

  if (typeof genre == 'string') {
    // to push genre string into genre array. @ is a placeholder
    genre = genre.split('@');
  }

  console.log(`genre: ${genre}`);
  console.log(`typeof: ${typeof genre}`);
  addNewGame(videoGame, genre);
  res.redirect('/games');
};

export default { gamesGet, gamesAddGet, gamesAddPost };
