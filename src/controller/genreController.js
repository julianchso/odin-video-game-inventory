const genreViewGet = (req, res) => {
  res.render('genres/genreView', {
    title: 'Genre',
  });
};

const genreAddGet = (req, res) => {
  const { genre } = req.body;
};

const genreAddPost = (req, res) => {
  const { genre } = req.body;
};

export default { genreViewGet, genreAddGet, genreAddPost };
