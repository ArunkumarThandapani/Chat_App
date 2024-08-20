const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const gernerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
};

module.exports = gernerateToken;
