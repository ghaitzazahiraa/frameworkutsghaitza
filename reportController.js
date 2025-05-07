const db = require('../config/db');

exports.getReport = (req, res) => {
  const query = `
    SELECT
      SUM(CASE WHEN type = 'masuk' THEN amount ELSE 0 END) AS total_masuk,
      SUM(CASE WHEN type = 'keluar' THEN amount ELSE 0 END) AS total_keluar,
      (SUM(CASE WHEN type = 'masuk' THEN amount ELSE 0 END) -
       SUM(CASE WHEN type = 'keluar' THEN amount ELSE 0 END)) AS saldo
    FROM transactions
  `;
  
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};
