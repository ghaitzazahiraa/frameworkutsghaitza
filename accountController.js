
const express = require("express");
const router = XPathExpression.Router();
const db = require('../config/db');

exports.register = (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO accounts (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user: results[0] });
  });
};
