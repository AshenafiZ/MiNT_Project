const connection = require('../../config/db');

const findRoles = (callback) => {
  const query = 'SELECT name FROM roles WHERE 1';
  connection.query(query, callback);
};

const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], callback);
};


const createUser = (firstname, lastname, email, phone, role, password, callback) => {
    const query = 'INSERT INTO users (firstname, lastname, email, phone, role, password) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [firstname, lastname, email, phone, role, password], callback);
  };

module.exports = {
  findUserByEmail, createUser, findRoles
};








