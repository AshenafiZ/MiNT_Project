const userModel = require('../models/user');
const db = require('../../config/db');

// Get all users
const getUsers = (req, res) => {
    userModel.getUsers((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching users', error: err });
        }
        res.status(200).json(results);
    });
};

// Create a new user

const createUser = (req, res) => {
    const { f_name, l_name, email, phone, role } = req.body;

    // Simple validation to check if all fields are provided
    if (!f_name || !l_name || !email || !phone || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert new user into the database
    const query = 'INSERT INTO user (f_name, l_name, email, phone, role) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [f_name, l_name, email, phone, role], (err, result) => {
        if (err) {
            console.error('Error inserting new user:', err);
            return res.status(500).json({ message: 'Error adding user', error: err });
        }
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    });
};




module.exports = { getUsers, createUser };
