const Voting = require("../models/voting");

function checkVote(req, res, next) {
  try {
    Voting.checkVote(req.body.user_id).then(([rows, values]) => {
      console.log(rows);
      if (rows.length == 0) {
        console.log("kajshsd");
        res.status(200).json({ message: "already voted" });
      } else {
        next();
      }
    });
  } catch (err) {
    const error = new Error(err);
  }
}

module.exports = checkVote;
