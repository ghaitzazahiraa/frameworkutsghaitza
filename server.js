const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/api/accounts', accountRoutes);
app.use('/api/transaction', transactionRoutes);

// Start server
const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
