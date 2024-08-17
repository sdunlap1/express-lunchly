/** Database setup for Lunchly. */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql://stephend:1gneous1@localhost/lunchly_test";
} else {
  DB_URI = "postgresql://stephend:1gneous1@localhost/lunchly";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect()
  .then(() => console.log(`Connected to PostgreSQL at ${DB_URI}`))
  .catch(err => console.error('Connection error', err.stack));

module.exports = db;
