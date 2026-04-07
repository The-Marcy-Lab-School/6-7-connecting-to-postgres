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
```

## Files

- `db/pool.js` — creates and exports the connection pool
- `db/seed.js` — creates tables if they don't exist and inserts seed data
- `db/queries.js` — CRUD operations using `pool.query()`
- `.env.template` — environment variable template
