const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser, findRoles} = require('../models/userModel');
require('dotenv').config();

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userResults = await findUserByEmail(email);
    if (userResults.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    const user = userResults[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token, name: user.firstname, role: user.role, success: true, message: 'Login successful' });
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

// Roles function
const roles = async (req, res) => {
  try {
    const rolesResults = await findRoles();
    if (rolesResults.length === 0) {
      return res.status(400).json({ err: 'No roles available' });
    }

    const roles = rolesResults.map((role) => role.name);
    return res.status(200).json({ roles });
  } catch (err) {
    return res.status(500).json({ err: 'Database error', error: err.message });
  }
};

// Signup function
const signup = async (req, res) => {
  const { firstname, lastname, email, phone, role, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).send('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(firstname, lastname, email, phone, role, hashedPassword);
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};




module.exports = {
  login, signup, roles
};
