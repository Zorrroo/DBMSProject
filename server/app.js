const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const app = express();
const port = 4000;

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err);
    return;
  }
  console.log('Connected to SQLite database');
});

app.use(express.json()); 

app.post("/login", async (request, response) => {
  const { username, email, password } = request.body; 

  if (!username || !email || !password) {
    return response.status(400).json({ error: "Name, email, and password are required" });
  }

  const query = `
    SELECT user_id, password
    FROM users
    WHERE username = ? AND email = ?
  `;

  db.get(query, [name, email], (err, row) => {
    if (err) {
      console.error('Error executing query:', err);
      return response.status(500).json({ error: 'Internal Server Error' });
    }

    if (!row) {
      return response.status(401).json({ error: 'Invalid name or email' });
    }

    // Check if passwords match
    if (row.password !== password) {
      return response.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: row.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    response.json({ token });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
