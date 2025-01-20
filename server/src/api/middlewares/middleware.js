const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, 
});

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

module.exports.upload = upload; 
