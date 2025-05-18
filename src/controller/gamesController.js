import {
  getAllGames,
  getAllGenres,
  getGameGenre,
  getGameInfo,
  addNewGame,
  postGamesEdit,
  deleteGame,
} from '../db/queries.js';

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
  try {
    const name = req.params.name;
    const allGenres = await getAllGenres();
    const genresGame = await getGameGenre(name);
    const gameInfo = await getGameInfo(name);

    console.log(genresGame);

    res.render('games/gameEdit', {
      title: name,
      game: name,
      allGenres: allGenres,
      genresGame: genresGame,
      releaseYear: gameInfo[0].release_year,
      publisher: gameInfo[0].publisher,
    });
  } catch (err) {
    console.log(err);
  }
};

const gamesEditPost = async (req, res) => {
  try {
    const name = req.params.name;
    const releaseYear = req.body.releaseYear;
    const publisher = req.body.publisher;
    let genres = [];

    for (const [key, value] of Object.entries(req.body)) {
      if (value == 'on') {
        genres.push(key);
      }
    }

    await postGamesEdit(name, genres, releaseYear, publisher);
  } catch (err) {
    console.log(err);
  }
};

const gamesEditCancel = (req, res) => {
  res.redirect('/games');
};

const gamesDelete = async (req, res) => {
  const name = req.params.name;
  await deleteGame(name);
  res.redirect('/games');
};

const gamesAddPost = (req, res) => {
  let { videoGame, genre, releaseYear, publisher } = req.body;

  if (typeof genre == 'string') {
    // to push genre string into genre array. @ is a placeholder
    genre = genre.split('@');
  }

  addNewGame(videoGame, genre, releaseYear, publisher);
  res.redirect('/games');
};

export default {
  gamesGet,
  gamesAddGet,
  gamesEdit,
  gamesEditCancel,
  gamesEditPost,
  gamesDelete,
  gamesAddPost,
};
