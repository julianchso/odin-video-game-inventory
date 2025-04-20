import pool from './pool.js';

async function getAllGames() {
  const { rows } = await pool.query('SELECT video_game_name FROM video_games');
  // console.log(rows);
  return rows;
}

async function addNewGame(name, genres) {
  // await pool.query('INSERT INTO video_games (video_game_name) VALUES ($1)', [name]);
  // const genreTest = await pool.query(`INSERT INTO genre (genre_name) SELECT UNNEST(?::TEXT[])`, [
  // const videoGame = await pool.query(`SELECT video_game_id FROM video_games
  //                   WHERE video_game_name = ${name}`);
  // const genreTest = await pool.query(`INSERT INTO genre (genre_name) SELECT UNNEST($1::TEXT[])`, [
  //   genres,
  // ]);
  const genreV2 = await pool.query(
    `
    INSERT INTO game_genre (video_game_id, genre_id)
    VALUES

    UNNEST(
      (SELECT video_game_id
      FROM video_games
      WHERE video_game_name = $2),
      
      SELECT genre_id
      FROM genre
      WHERE genre_name IN
      (SELECT * FROM UNNEST($1::TEXT[])
    )
    `,
    [genres, name]
  );
  console.log(`New genre: ${genreV2}`);
}

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
