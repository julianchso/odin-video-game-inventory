import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query('SELECT video_game_name FROM video_games');
  console.log(rows);
  return rows;
}

async function addNewGame(name, genre) {
  await pool.query('INSERT INTO video_games (name) VALUES ($1)', [name]);
  await pool.query('INSERT INTO genre_name (genre) VALUES ($2)', [genre]);
}

async function getAllGenres() {
  const { rows } = await pool.query('SELECT genre_name FROM genre');
  console.log(rows);
  return rows;
}

async function insertGenre(genre) {
  await pool.query(
    'INSERT INTO genre (genre_name) VALUES ($1) ON CONFLICT (genre_name) DO NOTHING',
    [genre]
  );
}

export { getAllGames, addNewGame, getAllGenres, insertGenre };
