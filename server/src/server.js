require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db')
const configureMiddleware = require('./api/middlewares/middleware');
const userRouter = require('./api/routes/userRoute');
const adminRuter = require('./api/routes/adminRoute');
const ministerRouter = require('./api/routes/ministerRoute');
const sectorRouter = require('./api/routes/sectorRoute');
const officeRouter = require('./api/routes/officeRoute');
const strategyRoute = require('./api/routes/strategyRoute');
const connectDB = require('./config/db');
const { errorHandler } = require('./api/middlewares/errorMiddleware');

// connectDB();

const app = express();
const PORT = process.env.PORT;

configureMiddleware(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    // Synchronize models
    await sequelize.sync({ alter: true }); // Update the database schema to match models
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Exit if the database connection fails
  }
})();

app.use('/api/user', userRouter);
// app.use('/api/admin', adminRuter);
// app.use('/api/minister', ministerRouter);
// app.use('/api/strategy', strategyRoute);
// app.use('/api/sector', sectorRouter);
// app.use('/api/office', officeRouter);


app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

