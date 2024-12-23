const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser, findRoles} = require('../models/userModel');
require('dotenv').config();

const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    
    if (results.length === 0) {
      
      return res.status(401).send('Invalid email or password');
    }
   
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err){
        return res.status(500).json({message: "Error in compairing password"})
      }
      if (!isMatch){
        return res.status(400).json({message: "Invalid credentials "})
      }
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
       return res.status(200).json({ token, name:user.firstname, role: user.role , success:true, message: 'Login successful'})
    })
   
  });
};

const roles = (req, res) =>{
  findRoles((err, results) => {
    if(err) {
      return res.status(500).json({err: 'Database error'})
    }
    if (results.length === 0) {
      return res.status(400).json({err: "empty role"})
    }

    
    const roles = results
    return res.status(201).json({roles: roles.map((role) => role.name)})
  })

}

const signup = (req, res) => {
    const { firstname, lastname, email, phone, role, password } = req.body; 
  
    findUserByEmail(email, (err, results) => {
      if (err) {
        return res.status(500).send('Database error');
      }
      if (results.length > 0) {
        return res.status(400).send('Email already in use');
      }
  
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).send('Error hashing password');
        }
  
        createUser(firstname, lastname, email, phone, role, hashedPassword, (err, results) => {
          if (err) {
            return res.status(500).json({message: 'Error creating user'});
          }
  
          res.status(201).json({message: 'User registered successfully'});
        });
      });
    });
  };

module.exports = {
  login, signup, roles
};
