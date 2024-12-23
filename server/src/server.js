require('dotenv').config();
const express = require('express');
const configureMiddleware = require('./api/middlewares/middleware');
const userRouter = require('./api/routes/userRoute');
const adminRuter = require('./api/routes/adminRoute');
const ministerRouter = require('./api/routes/ministerRoute');
const sectorRouter = require('./api/routes/sectorRoute');
const officeRouter = require('./api/routes/officeRoute');



const app = express();
const PORT = process.env.PORT;

configureMiddleware(app);

app.use('/api/user', userRouter);
app.use('/api/admin', adminRuter);
app.use('/api/minister', ministerRouter);
app.use('/api/sector', sectorRouter);
app.use('/api/office', officeRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

