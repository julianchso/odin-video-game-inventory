const genreGet = (req, res) => {
  res.render('genre', {
    title: 'Genre',
  });
};

const genrePost = (req, res) => {
  const { genre } = req.body;
};

export default { genreGet, genrePost };
