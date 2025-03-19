const homepageGet = (req, res) => {
  res.render('home', {
    title: 'Video Game Inventory',
  });
};

const gamesGet = (req, res) => {
  res.render('itemAdd', {
    title: 'Add Video Game',
  });
};

const addGamePost = (req, res) => {
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

export default { homepageGet, gamesGet, addGamePost, addGenreGet, addGenrePost };
