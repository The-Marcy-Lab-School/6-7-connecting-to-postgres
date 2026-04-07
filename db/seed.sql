\c users_db

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id  SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email    TEXT NOT NULL UNIQUE
);

INSERT INTO users (username, email) VALUES
  ('ann_duong',  'ann@example.com'),
  ('reuben_o',   'reuben@example.com'),
  ('motun_b',    'motun@example.com');
