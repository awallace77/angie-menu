const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/menu_database.db");
const express = require("express");
const router = express.Router();

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS saved_menus (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    items JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Change 'app' to 'router' here
router.post("/api/save-menu", (req, res) => {
  const { title, author, items } = req.body;
  const stmt = db.prepare(
    "INSERT INTO saved_menus (title, author, items) VALUES (?, ?, ?)"
  );

  stmt.run(title, author, JSON.stringify(items), function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, message: "Menu saved successfully!" });
  });
  stmt.finalize();
});

// Change 'app' to 'router' here
router.get("/api/saved-menus", (req, res) => {
  db.all(
    "SELECT * FROM saved_menus ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});

module.exports = router;
