module.exports.insertUser =
  "INSERT INTO USERS (name, email, password) VALUES (?,?,?)";

module.exports.fetchUser = "SELECT * FROM USERS WHERE email = ?";

module.exports.insertCandidate =
  "INSERT INTO candidate (name, numberOfChallengesSolved, expertise,emailId, password) VALUES (?,?,?, ?, ?)";

module.exports.deleteCandidate = "DELETE FROM candidate WHERE id = ?";

module.exports.updateCandidate =
  "UPDATE candidate SET name = ?, numberOfChallengesSolved = ?, expertise = ?, emailId = ? WHERE id = ?";

module.exports.fetchCandidate = "SELECT * FROM candidate WHERE emailId = ?";

module.exports.getAllCandidates =
  "SELECT candidate.id, candidate.name, candidate.emailId, candidate.expertise, candidate.numberOfChallengesSolved, expert.Data_structures, expert.Algorithms, expert.C, expert.Java, expert.Python, expert.Javascript  FROM candidate INNER JOIN expert on candidate.emailId = expert.candidateId";

module.exports.insertExperience =
  "INSERT INTO expert (Data_structures, Algorithms, C,Java, Python, Javascript, candidateId) VALUES (?,?,?,?,?,?,?)";

module.exports.updateExperience =
  "UPDATE expert SET Data_structures= ?,Algorithms=?, C=?, Java = ?, Python = ?, Javascript =?, candidateId = ? WHERE id = ?";

module.exports.deleteExperience = "DELETE FROM expert WHERE id = ?";
module.exports.getExpertData =
  "SELECT Data_structures, Algorithms, C, Java, Python, Javascript FROM expert";

module.exports.saveVote =
  "INSERT INTO voting (user_id, canditate_id) VALUES (?, ?)";
module.exports.checkVote = "SELECT * FROM voting WHERE id = ?";
