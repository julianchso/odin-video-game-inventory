const homepageGet = (req, res) => {
  res.render('home', {
    title: 'Video Game Inventory',
  });
};

const addItemGet = (req, res) => {
  res.render('itemAdd', {
    title: 'Add Video Game',
  });
};

const addItemPost = (req, res) => {
  const { videoGame } = req.body;
};

const addGenreGet = (req, res) => {
  const { genre } = req.body;
  res.render('genreAdd', {
    title: 'Add Genre',
  });
};

const addGenrePost = (req, res) => {
  const { Genre } = req.body;
};

export default { homepageGet, addItemGet, addItemPost, addGenreGet, addGenrePost };
