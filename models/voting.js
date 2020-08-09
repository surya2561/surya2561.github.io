const dbConn = require("../config/DBconnection");
const sqlquery = require("./sqlQuery");

module.exports = class Vote {
  constructor(user_id, candidate_id) {
    this.user_id = user_id;
    this.candidate_id = candidate_id;
    console.log(this);
  }
  saveVote() {
    return dbConn.execute(sqlquery.saveVote, [this.user_id, this.candidate_id]);
  }
  static checkVote(id) {
    return dbConn.execute(sqlquery.checkVote, [id]);
  }
};
