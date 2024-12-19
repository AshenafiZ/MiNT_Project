const db = require('../../config/db');

// Function to find a user by email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], callback);
};

const createUser = (username, email, password, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], callback);
  };

module.exports = {
  findUserByEmail, createUser
};



// const addUser = (user, callback) => {
//     db.query('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email], callback);
// };







