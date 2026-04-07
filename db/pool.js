const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config(); // loads values from .env

const productionConfig = {
  connectionString: process.env.PG_CONNECTION_STRING
};

const developmentConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
}

// If the PG_CONNECTION_STRING is set, use it. Otherwise use the individual variables.
const pool = process.env.PG_CONNECTION_STRING
  ? new Pool(productionConfig)
  : new Pool(developmentConfig);

// ========================================================================
// Test the connection by uncommenting the lines below.
// pool.end() closes the connection so the process exits cleanly.
// ========================================================================

const test = async () => {
  const { rows } = await pool.query('SELECT * FROM users');
  console.log(rows);
};

// test() // <-- uncomment first
//   .finally(() => pool.end()); // <-- then uncomment this

// ========================================================================
// Export the pool instance
// ========================================================================
module.exports = pool;
