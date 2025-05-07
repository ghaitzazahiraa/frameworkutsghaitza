
const db = require('../config/db');

exports.addTransaction = (req, res) => {
  const { type, description, amount, date, account_id } = req.body;
  db.query('INSERT INTO transactions (type, description, amount, date, account_id) VALUES (?, ?, ?, ?, ?)',
    [type, description, amount, date, account_id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'Transaction added' });
    });
};

exports.getTransactions = (req, res) => {
  db.query('SELECT * FROM transactions', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
