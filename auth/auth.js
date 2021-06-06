const jwt = require('jsonwebtoken');

function jwtValidation(request, response, next) {
    const token = request.get("Authentication");
  
    if (!token) {
      response.status(401).json({
        message: "There is no token"
      });
  
      return;
    }
  
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      request.user = payload;
      next();
    } catch (e) {
      response.status(401).json({
        message: "Invalid token"
      });
    }
  }

module.exports = jwtValidation;