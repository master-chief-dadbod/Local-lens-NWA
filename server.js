require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const { Pool } = require('pg');

const PORT = process.env.PORT || 3000;

// PostgreSQL connection pool using DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Serve static files from project root
app.use(express.static(__dirname));

// Test database route
app.get('/db-test', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.json(rows[0]);
  } catch (err) {
    console.error('Error executing SELECT NOW()', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Fallback to index.html for SPA-like routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Local Lens running on port ${PORT}`);
});
