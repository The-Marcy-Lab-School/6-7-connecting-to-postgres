const { Pool } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'users_db',
  user: '',
  password: '',
}

const pool = new Pool(config);

const printUsers = async () => {
  const { rows } = await pool.query('SELECT * FROM users');
  console.log(rows);
}

const getUserById = async (user_id) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE user_id = $1',
    [user_id]  // values passed in a separate array
  );
  return rows[0] || null;
};

const findByCredentials = async (username, email) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE username = $1 AND email = $2',
    [username, email]
  );
  return rows[0] || null;
};

const createUser = async (username, email) => {
  const { rows } = await pool.query(
    'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
    [username, email]
  );
  return rows[0];
};

const main = async () => {
  await printUsers();
  console.log('----getByUserId(1)----');
  const user1 = await getUserById(1);
  console.log(user1);

  console.log('\n----getByUserId(5000)----');
  const nullUser = await getUserById(5000);
  console.log(nullUser);

  console.log(`\n----findByCredentials('reuben_o', 'reuben@example.com')----`);
  const reuben = await findByCredentials('reuben_o', 'reuben@example.com');
  console.log(reuben);

  console.log(`\n----createUser('ada', 'ada@email.com')----`);
  const newUser = await createUser('ada', 'ada@email.com');
  console.log(newUser);

  await pool.end();
  console.log('Connection pool drained');
};

main();
