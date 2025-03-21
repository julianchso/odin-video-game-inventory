import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query('SELECT video_game_name FROM video_games');
  console.log(rows);
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query('SELECT * FROM genre');
  return rows;
}

export { getAllGames, getAllGenres };
