import { getAllGames, getAllGenres, addNewGame } from '../db/queries.js';

const gamesGet = async (req, res) => {
  const videoGames = await getAllGames();

  const videoGamesObj = {};
  // TODO: push array to object using reduce
  videoGames.reduce();

  res.render('games/gameView', {
    title: 'Video Games List',
    videoGames: videoGamesObj,
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

  addNewGame(videoGame, genre);
  res.redirect('/games');
};

export default { gamesGet, gamesAddGet, gamesAddPost };
