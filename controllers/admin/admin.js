const express = require("express");
const tokenVerify = require("../../../../Rest/middleware/tokenVerification");
const router = express.Router();
const Candidate = require("../../models/candidate");
const checkCandidate = require("../../middleware/checkCandidate");
const bcrypt = require("bcrypt");
const Expert = require("../../models/expertIn");
const isAdmin = require("../../../../Rest/middleware/checkAdmin");

router.post("/addCandidate", [tokenVerify, isAdmin], async (req, res, next) => {
  try {
    const data = req.body;
    const validateMail = await checkCandidate(data.email);
    if (!validateMail.length) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
      const candidate = new Candidate(
        data.name,
        data.numberOfChallengesSolved,
        data.expertise,
        data.email,
        data.password
      );
      const saveCandidate = await candidate.saveCandidate();
      const expert = new Expert(
        data.Data_structures,
        data.Algorithms,
        data.C,
        data.Java,
        data.Python,
        data.Javascript,
        data.email
      );
      const saveExpert = await expert.saveExperience();
      console.log(saveExpert);
      if (saveExpert && saveCandidate) {
        res.status(200).json({ message: "Candidate saved successfully" });
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

router.delete(
  "/deleteCandidate/:id",
  [tokenVerify, isAdmin],
  async (req, res, next) => {
    try {
      const candidate = await Candidate.deleteCandidate(req.params.id);
      const expert = await Expert.deleteExperience(req.params.id);
      if (candidate && expert) {
        res.status(200).json("Deleted successfully");
      }
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/editCandidate",
  [tokenVerify, isAdmin],
  async (req, res, next) => {
    try {
      const data = req.body;
      const candidate = await Candidate.updateCandidate(
        data.name,
        data.numberOfChallengesSolved,
        data.expertise,
        data.email,
        data.id
      );
      const expert = await Expert.updateExperience(
        data.Data_structures,
        data.Algorithms,
        data.C,
        data.Java,
        data.Python,
        data.Javascript,
        data.email,
        data.id
      );
      if (candidate && expert) {
        res.status(200).json("Updates successfully");
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
