// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();

let transactions = [
  { id: 1, nama: 'Transaksi A', total: 10000 },
  { id: 2, nama: 'Transaksi B', total: 20000 }
];

router.get('/', (req, res) => res.json(transactions));
router.post('/', (req, res) => {
  const newTransaction = req.body;
  newTransaction.id = transactions.length + 1;
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});
router.put('/:id', (req, res) => {
  const index = transactions.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    transactions[index] = { ...transactions[index], ...req.body };
    res.json(transactions[index]);
  } else {
    res.status(404).json({ message: 'Transaksi tidak ditemukan' });
  }
});
router.delete('/:id', (req, res) => {
  const index = transactions.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    transactions.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Transaksi tidak ditemukan' });
  }
});

module.exports = router;
