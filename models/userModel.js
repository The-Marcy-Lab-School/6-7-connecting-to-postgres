const pool = require('../db/pool');

class User {
  static async list() {
    const result = await pool.query('SELECT * FROM users ORDER BY user_id');
    return result.rows;
  }

  static async find(user_id) {
    const result = await pool.query(
      'SELECT * FROM users WHERE user_id = $1',
      [user_id]
    );
    return result.rows[0] || null;
  }

  static async create(username, email) {
    const result = await pool.query(
      'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    return result.rows[0];
  }

  static async update(user_id, username, email) {
    const result = await pool.query(
      `UPDATE users
       SET username = $1, email = $2
       WHERE user_id = $3
       RETURNING *`,
      [username, email, user_id]
    );
    return result.rows[0] || null;
  }

  static async destroy(user_id) {
    const result = await pool.query(
      'DELETE FROM users WHERE user_id = $1 RETURNING *',
      [user_id]
    );
    return result.rows[0] || null;
  }
}

module.exports = User;
