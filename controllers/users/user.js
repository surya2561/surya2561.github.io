const express = require("express");
const checkUser = require("../../middleware/checkUser");
const User = require("../../models/user");
const Candidate = require("../../models/candidate");
const Vote = require("../../models/voting");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const tokenVerify = require("../../middleware/tokenVerification");
const Expert = require("../../models/expertIn");
const checkVote = require("../../middleware/checkVote");
const router = express.Router();

router.post("/registerUser", async (req, res, next) => {
  const data = req.body;
  try {
    console.log(data);
    const validateMail = await checkUser(data.email);
    console.log(validateMail);
    if (!validateMail.length) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
      const user = new User(data.name, data.email, data.password);
      const saveUser = await user.saveUser();
      console.log(saveUser);
      if (saveUser) {
        res.status(200).json({ message: "User saved successfully" });
      } else {
        res.status(200).json({ message: "Some thing went wrong" });
      }
    } else {
      res.status(200).json({ message: "Email was already registerd!" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/loginUser", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const validateMail = await checkUser(email);
    if (!validateMail.length) {
      res.status(200).json({ message: "email id was not registered" });
    } else {
      const validatePassword = await bcrypt.compare(
        password,
        validateMail[0].password
      );
      if (validatePassword) {
        const token = await jwt.sign(
          { id: validateMail[0].email },
          "jwtPrivateKey"
        );
        res.status(200).json({
          token: token,
          name: validateMail[0].name,
          id: validateMail[0].id,
        });
      } else {
        res.status(200).json({ message: "Invalid credentials" });
      }
    }
  } catch (err) {
    next(err);
  }
});

router.get("/getCandidates", [tokenVerify], async (req, res, next) => {
  try {
    console.log("akjsdfsd");
    const candidateData = await Candidate.getAllCandidates();
    res.status(200).json({ candidates: candidateData[0] });
  } catch (err) {
    next(err);
  }
});

router.post("/vote", [tokenVerify, checkVote], async (req, res, next) => {
  try {
    console.log(req.body);
    const vote = new Vote(req.body.user_id, req.body.candidate_id);
    const saveVote = await vote.saveVote();
    console.log(saveVote);
    if (saveVote) {
      res.status(200).json({ message: "Vote saved" });
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
