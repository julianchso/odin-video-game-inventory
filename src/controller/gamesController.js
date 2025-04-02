import { getAllGames, getAllGenres } from '../db/queries.js';

const gamesGet = async (req, res) => {
  const videoGames = await getAllGames();
  console.log(videoGames);
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
  const { videoGame } = req.body;
};

export default { gamesGet, gamesAddGet, gamesAddPost };
