function isAdmin(req, res, next) {
  try {
    if (!req.user.is_admin) {
      res.status(401).json({ Error: "Unauthorised" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = isAdmin;
