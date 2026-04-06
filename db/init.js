// db/init.js
// Creates tables if they don't exist.
// Run once before starting the server: npm run db:init

const pool = require('./pool');

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      user_id   SERIAL PRIMARY KEY,
      username  TEXT   NOT NULL UNIQUE,
      email     TEXT   NOT NULL UNIQUE
    );
  `);
  console.log('Tables ready.');
  await pool.end();
};

createTables().catch((err) => {
  console.error('Error initializing tables:', err);
  process.exit(1);
});
