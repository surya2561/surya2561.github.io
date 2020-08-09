const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Suri@1134",
  database: "votingpool",
});

module.exports = connection.promise();
