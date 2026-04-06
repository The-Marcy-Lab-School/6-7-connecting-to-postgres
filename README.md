# 6-7 Connecting to Postgres

Lecture code for [Connecting to Postgres with `pg`](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-6-databases/7-connecting-to-postgres).

## Setup

```sh
# Install dependencies
npm install

# Copy the environment template and fill in your values
cp .env.template .env

# Create the database (run once)
createdb users_db           # Mac
# sudo -u postgres createdb users_db   # Windows/WSL

# Initialize the schema
npm run db:init

# Start the server
npm start
```

## Files

- `db/pool.js` — creates and exports the connection pool
- `db/init.js` — creates tables if they don't exist (`npm run db:init`)
- `models/userModel.js` — CRUD model using `pool.query()`
- `.env.template` — environment variable template
