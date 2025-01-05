const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser, findRoles} = require('../models/userModel');
require('dotenv').config();

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
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.firstname+ " "+ user.lastname, sector_id: user.sector_id || null, office_id: user.office_id || null,}, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' });

    res.cookie("token", token, { 
      httpOnly: true, 
      sameSite: "Strict", 
      secure: process.env.NODE_ENV === 'production' 
    });

    return res.status(200).json({
      id: user.id,
      role: user.role,
      sector_id: user.sector_id,
      office_id: user.office_id,
      name: user.firstname+ " "+ user.lastname,
      success: true, message: 'Login successful' 
    });

  } catch (err) {
    console.error("Error logging in:", err.message);
    return res.status(500).json({ message: 'Error logging in'});
  }
};

const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "Strict" }).sendStatus(200);
};

const getUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};


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
  login, signup, roles, logout, getUser
};
