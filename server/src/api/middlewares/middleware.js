const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



module.exports = (app) => {

  app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true,               
  }));

  app.use(bodyParser.json());

  app.use(cookieParser());

  app.use(bodyParser.urlencoded({ extended: true }));

  console.log('Middleware configured.');
};
