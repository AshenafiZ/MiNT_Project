const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize')
const User = require('../models/user'); 
const Role = require('../models/role')

require('dotenv').config();


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    let profilePhoto = null;
    if (user.profile_photo) {
      profilePhoto = `data:image/jpeg;base64,${user.profile_photo.toString('base64')}`;
    }

    const token = jwt.sign(
      { 
        id: user.id, 
        role: user.role,
        sector_id: user.sector_id,
        office_id: user.office_id, 
        name: `${user.firstname} ${user.lastname}`,
        profile_photo: profilePhoto,
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production',
    });

    return res.status(200).json({
      id: user.id,
      role: user.role,
      sector_id: user.sector_id,
      office_id: user.office_id,
      name: `${user.firstname} ${user.lastname}`,
      profile_photo: profilePhoto,
      success: true,
      message: 'Login successful',
    });
  } catch (err) {
    console.error('Error logging in:', err.message);
    return res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

const logout = (req, res) => {
  res.clearCookie('token', { httpOnly: true, sameSite: 'Strict' }).sendStatus(200);
};

const getUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

const createRole = async (req, res) => {
  const { name } = req.body;

  try {
    const existingRole = await Role.findOne({ where: { name } });
    if (existingRole) {
      return res.status(400).json({ message: 'Role already exists' });
    }

    const newRole = await Role.create({ name});
    return res.status(201).json({ message: 'Role created successfully', role: newRole });
  } catch (error) {
    console.error('Error creating role:', error.message);
    return res.status(500).json({ message: 'Error creating role', error: error.message });
  }
};

// Fetch all roles
const roles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      attributes: ['name'],
      where: { name: { [Op.not]: 'admin' } }, 
    });

    if (roles.length === 0) {
      return res.status(404).json({ message: 'No roles found' });
    }
    const roleNames = roles.map((role) => role.name);
    return res.status(200).json(roleNames);
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    return res.status(500).json({ message: 'Error fetching roles', error: error.message });
  }
};


const signup = async (req, res) => {
  const { firstname, lastname, email, phone, role, password } = req.body;
  const profilePhoto = req.file; // Uploaded file

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      phone,
      role,
      password: hashedPassword,
      profile_photo: profilePhoto ? profilePhoto.buffer : null, // Save file buffer as BLOB
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error creating user:', err.message);
    return res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

module.exports = {
  login,
  signup,
  roles,
  createRole,
  logout,
  getUser,
};
