const dbConn = require("../config/DBconnection");
const sqlquery = require("./sqlQuery");
module.exports = class Candidate {
  constructor(name, numberOfChallengesSolved, expertise, email, password) {
    (this.name = name),
      (this.numberOfChallengesSolved = numberOfChallengesSolved),
      (this.expertise = expertise),
      (this.email = email),
      (this.password = password);
  }

  saveCandidate() {
    return dbConn.execute(sqlquery.insertCandidate, [
      this.name,
      this.numberOfChallengesSolved,
      this.expertise,
      this.email,
      this.password,
    ]);
  }

  static deleteCandidate(id) {
    return dbConn.execute(sqlquery.deleteCandidate, [id]);
  }

  static updateCandidate(name, numberOfChallengesSolved, expertise, email, id) {
    return dbConn.execute(sqlquery.updateCandidate, [
      name,
      numberOfChallengesSolved,
      expertise,
      email,
      id,
    ]);
  }

  static fetchCandidate(email) {
    return dbConn.execute(sqlquery.fetchCandidate, [email]);
  }
  static getAllCandidates() {
    return dbConn.execute(sqlquery.getAllCandidates);
  }
};
