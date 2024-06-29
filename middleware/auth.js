const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // extract token form headers, query parameters, or cookies
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    //verify jwt token
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded; //atach decoded user informationto quest object
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = auth;
