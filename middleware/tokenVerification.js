const jwt = require("jsonwebtoken");

function tokenVerify(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "Unauthorised" });
  }
  try {
    let decodeToken = jwt.verify(token, "jwtPrivateKey");
    console.log(decodeToken);
    next();
  } catch (err) {
    next(err);
  }
}
module.exports = tokenVerify;
