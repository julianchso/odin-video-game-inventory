const genreViewGet = (req, res) => {
  res.render('genres/genreView', {
    title: 'Genre',
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

export default { genreViewGet, genreAddGet, genreAddPost };
