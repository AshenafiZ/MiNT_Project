const jwt = require('jsonwebtoken');

const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden: Access denied' });
      }

      next(); 
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
};

module.exports = verifyRole;
