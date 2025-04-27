import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query('SELECT video_game_name FROM video_games');
  // console.log(rows);
  return rows;
}

async function addNewGame(name, genres) {
  // console.log(`${typeof name}: ${name}`);
  // console.log(`${genres}: is array? ${Array.isArray(genres)}`);
  console.log(`add new game genre: ${genres}`);
  try {
    // await pool.query('INSERT INTO video_games (video_game_name) VALUES ($1)', [name]);
    const genreV3 = await pool.query(
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

// CROSS JOIN (SELECT genre_id FROM genre WHERE genre_name = any(ARRAY[$2]::TEXT[]))
async function getAllGenres() {
  const { rows } = await pool.query('SELECT genre_name FROM genre');
  // console.log(rows);
  return rows;
}

async function insertGenre(genre) {
  await pool.query(
    `INSERT INTO genre (genre_name) VALUES (LOWER($1))
    ON CONFLICT (genre_name) DO NOTHING
    `,
    [genre]
    // ORDER BY genre_name
  );
}

async function orderByGenre() {
  await pool.query(
    `SELECT * FROM genre
    ORDER BY genre_name ASC`
  );
  console.log('order by genre');
}

export { getAllGames, addNewGame, getAllGenres, insertGenre, orderByGenre };
