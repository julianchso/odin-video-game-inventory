const indexGet = (req, res) => {
  res.render('index', {
    title: 'Video Game Inventory',
  });
};

export default { indexGet };
