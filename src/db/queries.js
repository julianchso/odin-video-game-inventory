import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query('SELECT video_game_name FROM video_games');
  console.log(rows);
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query('SELECT genre_name FROM genre');
  console.log(rows);
  return rows;
}

export { getAllGames, getAllGenres };
