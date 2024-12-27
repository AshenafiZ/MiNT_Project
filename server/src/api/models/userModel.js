
const findRoles = async () => {
  const [rows] = await pool.query('SELECT name FROM roles WHERE name != "admin"');
  return rows;
};

const findUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows;
};

const createUser = async (firstname, lastname, email, phone, role, password) => {
  const [result] = await pool.query(
    'INSERT INTO users (firstname, lastname, email, phone, role, password) VALUES (?, ?, ?, ?, ?, ?)',
    [firstname, lastname, email, phone, role, password]
  );
  return result;
};

module.exports = {
  findUserByEmail, createUser, findRoles
};








