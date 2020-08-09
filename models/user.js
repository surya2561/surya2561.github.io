const dbConn = require("../config/DBconnection");
const sqlquery = require("./sqlQuery");
module.exports = class User {
  constructor(name, emailId, password) {
    this.name = name;
    this.emailId = emailId;
    this.password = password;
  }

  saveUser() {
    return dbConn.execute(sqlquery.insertUser, [
      this.name,
      this.emailId,
      this.password,
    ]);
  }

  static fetchUser(email) {
    return dbConn.execute(sqlquery.fetchUser, [email]);
  }
};
