const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields required" });
  }

  const sql = `INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, phone], function (err) {
    if (err) {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.json({ id: this.lastID, name, email, phone });
  });
});

// READ ALL
router.get("/", (req, res) => {
  db.all("SELECT * FROM contacts", [], (err, rows) => {
    res.json(rows);
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const { name, email, phone } = req.body;
  db.run(
    "UPDATE contacts SET name=?, email=?, phone=? WHERE id=?",
    [name, email, phone, req.params.id],
    () => res.json({ message: "Updated successfully" })
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM contacts WHERE id=?", req.params.id, () =>
    res.json({ message: "Deleted successfully" })
  );
});

module.exports = router;
