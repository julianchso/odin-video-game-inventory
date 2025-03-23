import { getAllGenres } from '../db/queries.js';

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

const genreAddPost = (req, res) => {
  const { genre } = req.body;
};

export default { genreGet, genreAddGet, genreAddPost };
