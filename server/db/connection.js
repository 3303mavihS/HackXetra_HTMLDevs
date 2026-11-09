// SECURITY FIX (CWE-798: Hardcoded Credentials)
// A live Supabase PostgreSQL password was previously hardcoded here and
// committed to git history. That credential is COMPROMISED and has been
// ROTATED. The database connection string is now read from the DATABASE_URL
// environment variable (see server/.env.example).
require('dotenv').config();

const pgp = require('pg-promise')({
  // Initialization options
});

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set. See server/.env.example');
}

const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
