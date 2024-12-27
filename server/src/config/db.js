require('dotenv').config();
const mysql = require('mysql2/promise');


const connectDB = async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    });
    console.log("Connected to MySQL database.");
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

