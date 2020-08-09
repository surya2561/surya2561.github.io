const userModel = require("../models/user");

function checkUser(email) {
  try {
    return userModel.fetchUser(email).then(([rows, values]) => {
      return rows;
    });
  } catch (err) {
    const error = new Error(err);
  }
}

module.exports = checkUser;
