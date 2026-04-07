// db/queries.js
// Demonstrates running SELECT, INSERT, UPDATE, and DELETE queries with pg.
// Run with: npm run db:queries
//
// Make sure you have run `npm run db:seed` first so the table exists.

const pool = require('./pool');

// ============================================================
// READ — fully implemented for you, study these before moving on
// ============================================================

// Returns all users, ordered by user_id
const getAllUsers = async () => {
  const result = await pool.query(
    'SELECT * FROM users ORDER BY user_id'
  );
  return result.rows;
};

// Returns a single user by user_id, or null if not found.
// $1 is a parameterized placeholder — never interpolate values directly.
const getUserById = async (user_id) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE user_id = $1',
    [user_id]
  );
  return rows[0] || null;
};

// ============================================================
// CREATE — your turn
// ============================================================

// TODO: Implement createUser
// - INSERT a new row into users with the given username and email
// - Use parameterized placeholders ($1, $2) for the values
// - Use RETURNING * so the new row is returned
// - Return the newly created user object
const createUser = async (username, email) => {
  // const { rows } = await pool.query(
  //   'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
  //   [username, email]
  // );
  // return rows[0];
};

// ============================================================
// UPDATE — your turn
// ============================================================

// TODO: Implement updateUser
// - UPDATE the row with the matching user_id
// - Set username and email to the new values
// - Use RETURNING * so the updated row is returned
// - Return the updated user object, or null if no row was found
const updateUser = async (user_id, username, email) => {
  // const { rows } = await pool.query(
  //   `UPDATE users
  //    SET username = $1, email = $2
  //    WHERE user_id = $3
  //    RETURNING *`,
  //   [username, email, user_id]
  // );
  // return rows[0] || null;
};

// ============================================================
// DELETE — your turn
// ============================================================

// TODO: Implement deleteUser
// - DELETE the row with the matching user_id
// - Use RETURNING * so the deleted row is returned
// - Return the deleted user object, or null if no row was found
const deleteUser = async (user_id) => {
  // const { rows } = await pool.query(
  //   'DELETE FROM users WHERE user_id = $1 RETURNING *',
  //   [user_id]
  // );
  // return rows[0] || null;
};

// ============================================================
// Run the queries and log the results
// ============================================================

const main = async () => {
  console.log('--- All users ---');
  const users = await getAllUsers();
  console.log(users);

  console.log('\n--- User with id 1 ---');
  const user = await getUserById(1);
  console.log(user);

  // Uncomment each block below as you implement the functions above:

  // console.log('\n--- Create a new user ---');
  // const newUser = await createUser('new_person', 'new@example.com');
  // console.log(newUser);

  // console.log('\n--- Update the new user ---');
  // const updated = await updateUser(newUser.user_id, 'updated_person', 'updated@example.com');
  // console.log(updated);

  // console.log('\n--- Delete the updated user ---');
  // const deleted = await deleteUser(updated.user_id);
  // console.log(deleted);
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => pool.end());
