const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET semua akun
router.get('/', (req, res) => {
  db.query('SELECT * FROM accounts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// POST tambah akun
router.post('/', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO accounts (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body});
  });
});

// PUT ubah akun
router.put('/:id', (req, res) => {
  const { username, password } = req.body;
  db.query('UPDATE accounts SET username = ?, password = ? WHERE id = ?', [username, password, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Akun berhasil diupdate' });
  });
});

// DELETE akun
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM accounts WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Akun berhasil dihapus' });
  });
});

module.exports = router;
