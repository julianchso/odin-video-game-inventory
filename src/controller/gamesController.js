const gamesGet = (req, res) => {
  res.render('games/gameView', {
    title: 'Add Video Game',
  });
};

const gamesPost = (req, res) => {
  const { videoGame } = req.body;
};

export default { gamesGet, gamesPost };
