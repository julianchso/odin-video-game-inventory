import { getAllGames, getAllGenres } from '../db/queries.js';

const gamesGet = async (req, res) => {
  const videoGames = await getAllGames();
  console.log(videoGames);
  res.render('games/gameView', {
    title: 'Video Games List',
    videoGames: videoGames,
  });
};

const gamesAddGet = (req, res) => {
  res.render('games/gameAdd', {
    title: 'Add Video Game',
  });
};

const gamesAddPost = (req, res) => {
  const { videoGame } = req.body;
};

export default { gamesGet, gamesAddGet, gamesAddPost };
