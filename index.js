const express = require("express");
const admin = require("./controllers/admin/admin");
const users = require("./controllers/users/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with,Authorization, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/onlineVotingPool/Admin", admin);
app.use("/api/onlineVotingPool/Users", users);
app.use((err, req, res, next) => {
  res.json(err.message);
});
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
