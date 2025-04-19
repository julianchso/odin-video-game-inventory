import { getAllGames, addNewGame, getAllGenres, insertGenre, orderByGenre } from '../db/queries.js';

const genreGet = async (req, res) => {
  const genre = await getAllGenres();
  res.render('genres/genreView', {
    title: 'Genre List',
    genre: genre,
  });
};

const genreAddGet = (req, res) => {
  res.render('genres/genreAdd', {
    title: 'Add a genre',
  });
};

const genreAddPost = async (req, res) => {
  const { genre } = req.body;
  await insertGenre(genre);
  await orderByGenre();
  res.redirect('/genre');
};

export default { genreGet, genreAddGet, genreAddPost };
