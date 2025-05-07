
CREATE DATABASE IF NOT EXISTS cash_management;
USE cash_management;

CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('masuk', 'keluar') NOT NULL,
  description VARCHAR(255),
  amount INT NOT NULL,
  date DATE NOT NULL,
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);
