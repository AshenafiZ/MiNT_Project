
// const findRoles = async () => {
//   const [rows] = await pool.query('SELECT name FROM roles WHERE name != "admin"');
//   return rows;
// };

// const findUserByEmail = async (email) => {
//   const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//   return rows;
// };

// const createUser = async (firstname, lastname, email, phone, role, password) => {
//   const [result] = await pool.query(
//     'INSERT INTO users (firstname, lastname, email, phone, role, password) VALUES (?, ?, ?, ?, ?, ?)',
//     [firstname, lastname, email, phone, role, password]
//   );
//   return result;
// };

// module.exports = {
//   findUserByEmail, createUser, findRoles
// };



const bcrypt = require('bcryptjs');
const User = require('./user'); 

const findRoles = async () => {
  try {
    const roles = await User.findAll({
      attributes: ['role'],
      where: { role: { [Op.ne]: 'admin' } }, // Exclude 'admin'
      group: ['role'], // Ensure unique roles
    });
    return roles.map((r) => r.role);
  } catch (err) {
    throw new Error('Error fetching roles: ' + err.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  } catch (err) {
    throw new Error('Error fetching user: ' + err.message);
  }
};

const createUser = async ({ firstname, lastname, email, phone, role, password }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      phone,
      role,
      password: hashedPassword,
    });
    return newUser;
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

module.exports = {
  findRoles,
  findUserByEmail,
  createUser,
};





