require('dotenv').config();
const express = require('express');
const configureMiddleware = require('./api/middlewares/middleware');
const routes = require('./api/routes/userRoutes');


const app = express();
const PORT = process.env.PORT;

configureMiddleware(app);

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

