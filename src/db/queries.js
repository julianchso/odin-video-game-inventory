import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query(
    `SELECT video_game_name, genre_name
     FROM game_genre
     JOIN video_games ON video_games.video_game_id = game_genre.video_game_id 
     JOIN genre ON genre.genre_id = game_genre.genre_id
    `
  );
  return rows;
}

async function addNewGame(name, genres) {
  try {
    await pool.query('INSERT INTO video_games (video_game_name) VALUES ($1)', [name]);
    await pool.query(
      `
      INSERT INTO game_genre (video_game_id, genre_id)
        SELECT video_game_id, genre_id
          FROM (SELECT video_game_id
            FROM video_games WHERE video_game_name = $1)
            CROSS JOIN (SELECT genre_id FROM genre WHERE genre_name = any($2::TEXT[]))
            ON CONFLICT (video_game_id, genre_id) DO NOTHING
            `,
      [name, genres]
    );
  } catch (err) {
    console.log(err);
  }
}

async function getAllGenres() {
  const { rows } = await pool.query('SELECT genre_name FROM genre');
  return rows;
}

async function insertGenre(genre) {
  try {
    await pool.query(
      `INSERT INTO genre (genre_name) VALUES (LOWER($1))
      ON CONFLICT (genre_name) DO NOTHING
      `,
      [genre]
      // ORDER BY genre_name
    );
  } catch (err) {
    console.log(err);
  }
}

async function orderByGenre() {
  await pool.query(
    `SELECT * FROM genre
    ORDER BY genre_name ASC`
  );
}

export { getAllGames, addNewGame, getAllGenres, insertGenre, orderByGenre };
