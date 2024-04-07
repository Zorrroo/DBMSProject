const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const cors = require("cors");
const port = 4000;

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error connecting to SQLite database:", err);
    return;
  }
  console.log("Connected to SQLite database");
});

app.use(express.json());
app.use(cors());

app.get("/", async (request, response) => {
  try {
    const query = `SELECT * FROM places;`;
    const places = await new Promise((resolve, reject) => {
      db.all(query, (error, results) => {
        if (error) {
          console.error("Error fetching data:", error);
          reject("Internal Server Error");
        }
        resolve(results);
      });
    });

    const promises = places.map(async (obj) => {
      const query1 = `SELECT transportation_name FROM transportation WHERE transportation_type = "Railway Station" AND region_id = ${obj.region_id}`;
      const query2 = `SELECT transportation_name FROM transportation WHERE transportation_type = "Airport" AND region_id = ${obj.region_id}`;

      const railway = await new Promise((resolve, reject) => {
        db.all(query1, (error, results) => {
          if (error) {
            console.error("Error fetching railway data:", error);
            reject("Internal Server Error");
          }
          resolve(results);
        });
      });

      const airport = await new Promise((resolve, reject) => {
        db.all(query2, (error, results) => {
          if (error) {
            console.error("Error fetching airport data:", error);
            reject("Internal Server Error");
          }
          resolve(results);
        });
      });

      return { ...obj, railway, airport };
    });

    const data = await Promise.all(promises);
    response.json(data);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error });
  }
});

app.get("/:transport", async (request, response) => {
  const transport = request.params.transport;
  const { from, to } = request.query;
  if (!from || !to) {
    return response
      .status(400)
      .json({ error: "Both from and to parameters are required" });
  }
  if (transport !== "trains" && transport !== "flights") {
    return response.status(400).json({ error: "Invalid transport mode" });
  }

  try {
    const query = `SELECT * FROM ${transport} WHERE departure = ? AND destination = ?`;
    db.all(query, [from, to], (error, results) => {
      if (error) {
        console.error("Error fetching data:", error);
        return response.status(500).json({ error: "Internal Server Error" });
      }
      response.json(results);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// app.get("/lists", async (request, response) => {
//   const query1 = `SELECT departure, destination FROM trains;`;
//   db.all(query1, (error, results) => {
//     if (error) {
//       console.error("Error fetching data:", error);
//       return response.status(500).json({ error: "Internal Server Error" });
//     }
//     response.json(results);

//   });
// });

app.post("/login", async (request, response) => {
  const { name, email, password } = request.body;
  if (!name || !email || !password) {
    return response
      .status(400)
      .json({ error: "Name, email, and password are required" });
  }
  const query = `
    SELECT user_id, password
    FROM users
    WHERE name = ? AND email = ?
  `;
  db.get(query, [name, email], (err, row) => {
    if (err) {
      console.error("Error executing query:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
    if (!row) {
      return response.status(401).json({ error: "Invalid name or email" });
    }
    if (row.password !== password) {
      return response.status(401).json({ error: "Invalid password" });
    }
    const token = row.user_id;
    console.log(token);
    response.json({ token });
  });
});

app.post("/signUp", async (request, response) => {
  const { name, email, phone, password } = request.body;
  if (!name || !email || !phone || !password) {
    return response
      .status(400)
      .json({ error: "Name, email, phone, and password are required" });
  }
  const checkExistingUserQuery = `
    SELECT user_id
    FROM users
    WHERE email = ?
  `;
  db.get(checkExistingUserQuery, [email], (err, existingUser) => {
    if (err) {
      console.error("Error executing query:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
    if (existingUser) {
      return response
        .status(401)
        .json({ error: "User with this email already exists" });
    }
    const insertNewUserQuery = `
      INSERT INTO users (name, email, phone, password)
      VALUES (?, ?, ?, ?)
    `;
    db.run(insertNewUserQuery, [name, email, phone, password], function (err) {
      if (err) {
        console.error("Error executing query:", err);
        return response.status(500).json({ error: "Internal Server Error" });
      }
      const userId = this.lastID;
      response.json({ userId });
    });
  });
});

app.post("/fg", async (request, response) => {
  const { email, phone, password } = request.body;
  if (!phone || !email || !password) {
    return response
      .status(400)
      .json({ error: "Phone, email, password are required" });
  }

  const query = `
    SELECT *
    FROM users
    WHERE phone = ? AND email = ?
  `;

  db.get(query, [phone, email], (err, row) => {
    if (err) {
      console.error("Error executing query:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
    if (!row) {
      return response
        .status(401)
        .json({ error: "User with provided phone and email not found" });
    }

    const updateQuery = `
      UPDATE users
      SET password = ?
      WHERE phone = ? AND email = ?
    `;
    db.run(updateQuery, [password, phone, email], (err) => {
      if (err) {
        console.error("Error updating password:", err);
        return response
          .status(500)
          .json({ error: "Failed to update password" });
      }
      console.log("Successfully changed");
      response.status(200).json({ message: "Password updated successfully" });
    });
  });
});

app.get("/reviewPlace", async (request, response) => {});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
