const express = require("express");
const router = express.Router();
require("dotenv").config();

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) console.error("mysql connection error");
  else console.log("mysql connect successfully!");
});

router.post("/user/signup/checkemail", function (req, res) {
  let user_email = req.body.email;
  console.log(req.body.email);
  let sql = "select email from users where id=?";
  connection.query(sql, [user_id], function (err, rows, fields) {
    console.log(rows);
    let checkemail = new Object();
    checkemail.tf = false;
    if (rows[0] === undefined) {
      checkemail.tf = true;
      res.send(checkid);
    } else {
      checkemail.tf = false;
      res.send(checkemail);
    }
  });
});
