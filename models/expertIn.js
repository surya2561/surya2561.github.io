const dbConn = require("../config/DBconnection");
const sqlquery = require("./sqlQuery");
module.exports = class Expert {
  constructor(
    Data_structures,
    Algorithms,
    C,
    Java,
    Python,
    Javascript,
    candidateEmailId
  ) {
    (this.Data_structures = Data_structures),
      (this.Algorithms = Algorithms),
      (this.C = C),
      (this.Java = Java),
      (this.Python = Python),
      (this.Javascript = Javascript),
      (this.candidateEmailId = candidateEmailId);
  }

  saveExperience() {
    return dbConn.execute(sqlquery.insertExperience, [
      this.Data_structures,
      this.Algorithms,
      this.C,
      this.Java,
      this.Python,
      this.Javascript,
      this.candidateEmailId,
    ]);
  }

  static deleteExperience(id) {
    return dbConn.execute(sqlquery.deleteExperience, [id]);
  }

  static updateExperience(
    Data_structures,
    Algorithms,
    C,
    Java,
    Python,
    Javascript,
    candidateId,
    id
  ) {
    return dbConn.execute(sqlquery.updateExperience, [
      Data_structures,
      Algorithms,
      C,
      Java,
      Python,
      Javascript,
      candidateId,
      id,
    ]);
  }

  static getExpertData() {
    return dbConn.execute(sqlquery.getExpertData);
  }
};
