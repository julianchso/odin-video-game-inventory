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

async function addNewGame(name, genres, releaseYear, publisher) {
  try {
    await pool.query(
      'INSERT INTO video_games (video_game_name, release_year, publisher) VALUES ($1, $2, $3)',
      [name, releaseYear, publisher]
    );
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

async function getGameGenre(name) {
  try {
    const { rows } = await pool.query(
      `SELECT genre_name FROM genre
       JOIN game_genre ON game_genre.genre_id = genre.genre_id
       JOIN video_games ON game_genre.video_game_id = video_games.video_game_id
       WHERE video_game_name = $1`,
      [name]
    );
    // console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

async function getGameInfo(name) {
  try {
    const { rows } = await pool.query(
      `SELECT release_year, publisher FROM video_games
      WHERE video_game_name = $1`,
      [name]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
}

async function postGamesEdit(name, genres, releaseYear, publisher) {
  try {
    console.log(name);
    console.log(genres);
    console.log(releaseYear);
    console.log(publisher);
    // await pool.query(
    //   `UPDATE video_games
    //    SET publisher = $1
    //    WHERE video_game_name = $2`,
    //   [publisher, name]
    // );
  } catch (err) {
    console.log(err);
  }
}

async function deleteGame(name) {
  try {
    const { rows } = await pool.query('DELETE FROM video_games WHERE video_game_name = $1', [name]);
    return rows;
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

export {
  getAllGames,
  addNewGame,
  getGameGenre,
  getGameInfo,
  postGamesEdit,
  deleteGame,
  getAllGenres,
  insertGenre,
  orderByGenre,
};
