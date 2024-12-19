const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser} = require('../models/user');
require('dotenv').config();

const login = (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  findUserByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    if (results.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).send('Invalid email or password');
    }

    // Generate a JWT
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and role
    res.json({ token, role: user.role });
  });
};

// Signup controller
const signup = (req, res) => {
    const { username, email, password } = req.body;
  
    // Check if the email is already in use
    findUserByEmail(email, (err, results) => {
      if (err) {
        return res.status(500).send('Database error');
      }
      if (results.length > 0) {
        return res.status(400).send('Email already in use');
      }
  
      // Hash the password before storing it
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).send('Error hashing password');
        }
  
        // Create new user in the database
        createUser(username, email, hashedPassword, (err, results) => {
          if (err) {
            return res.status(500).send('Error creating user');
          }
  
          // Respond with a success message
          res.status(201).send('User registered successfully');
        });
      });
    });
  };

module.exports = {
  login, signup,
};
