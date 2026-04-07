# 6-7 Connecting to Postgres

Lecture code for [Connecting to Postgres with `pg`](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-6-databases/7-connecting-to-postgres).

## Setup


```sh
# Install dependencies
npm install
```

Create the database (run once)

```sh
createdb users_db           # Mac
sudo -u postgres createdb users_db   # Windows/WSL
```

Seed the database

```sh
psql -f seed.sql                    # Mac
sudo -u postgres psql -f seed.sql   # Windows/WSL
```

## Files

- `db/pool.js` — creates and exports the connection pool
- `db/seed.sql` — creates tables if they don't exist and inserts seed data
