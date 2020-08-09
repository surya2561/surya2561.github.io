const candidateModel = require("../models/candidate");

function checkCandidate(email) {
  try {
    return candidateModel.fetchCandidate(email).then(([rows, values]) => {
      return rows;
    });
  } catch (err) {
    const error = new Error(err);
  }
}

module.exports = checkCandidate;
