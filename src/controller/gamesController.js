import { getAllGames, getAllGenres, getGenre, addNewGame, deleteGame } from '../db/queries.js';

const gamesGet = async (req, res) => {
  const videoGames = await getAllGames();

  const videoGamesCopy = videoGames.reduce((acc, { video_game_name, genre_name }) => {
    let existing = acc.find((item) => item.video_game_name === video_game_name);
    if (existing) {
      existing.genre_name.push(genre_name);
    } else {
      acc.push({ video_game_name: video_game_name, genre_name: [genre_name] });
    }
    return acc;
  }, []);

  res.render('games/gameView', {
    title: 'Video Games List',
    videoGames: videoGamesCopy,
  });
};

const gamesAddGet = async (req, res) => {
  const genre = await getAllGenres();
  res.render('games/gameAdd', {
    title: 'Add Video Game',
    genre: genre,
  });
};

const gamesEdit = async (req, res) => {
  const name = req.params.name;
  const genre = getGenre(name);
  res.render('games/gameEdit', {
    title: name,
    game: name,
    genre: genre,
  });
};

const gamesDelete = async (req, res) => {
  const name = req.params.name;
  await deleteGame(name);
  res.redirect('/games');
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

export default { gamesGet, gamesAddGet, gamesEdit, gamesDelete, gamesAddPost };
