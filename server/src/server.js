require('dotenv').config();
const express = require('express');
const configureMiddleware = require('./api/middlewares/middleware');
const routes = require('./api/routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware
configureMiddleware(app);

// API routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

