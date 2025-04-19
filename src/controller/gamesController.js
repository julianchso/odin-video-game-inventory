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
  const { videoGame, genre } = req.body;
  const genreArr = [];

  if (typeof genre == 'string') {
    genreArr.push(genre);
  } else {
    for (let i = 0; i < genre.length; i++) {
      genreArr.push(genre[i]);
    }
  }

  console.log(`gameController: ${typeof genreArr}`);
  console.log(`genreArr: ${genreArr}`);
  addNewGame(videoGame, genreArr);
  // console.log(videoGame, genre);
  res.redirect('/games');
};

export default { gamesGet, gamesAddGet, gamesAddPost };
