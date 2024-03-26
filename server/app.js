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
  const query = `
    SELECT *
    FROM users
    WHERE username = ? AND email = ? AND password = ?
  `;
  db.get(query, [username, email, password], (err, row) => {
    if (err) {
      console.error('Error executing query:', err);
      response.status(500).send('Internal Server Error');
      return;
    }
    if (row) {
      const token = jwt.sign({ username, email }, 'your_secret_key_here');
      response.json({ token });
    } else {
      response.status(401).send('Unauthorized');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
