
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cash_management'
});
connection.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});
module.exports = connection;
