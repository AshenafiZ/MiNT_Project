require('dotenv').config();
// const mysql = require('mysql2/promise');


// const connectDB = async () => {
//   try {
//     pool = await mysql.createPool({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       waitForConnections: true,
//       connectionLimit: 10,
//     });
//     console.log("Connected to MySQL database.");
//   } catch (error) {
//     console.error("Error connecting to MySQL:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host:process.env.DB_HOST ,
    dialect: process.env.DIALECT,
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;

