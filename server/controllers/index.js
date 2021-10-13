module.exports = {
  auth: require("./user/auth"),
  login: require("./user/login"),
  logout: require("./user/logout"),
  signup: require("./user/signup"),
  validEmail: require("./user/validEmail"),
  checkNickname: require("./user/checkNickname"),
};

// const express = require("express");
// const router = express.Router();
// const { login } = require("../controllers/user");

// //POST login
// router.post("/login", login.post);
// //POST logout
// router.post("/logout", logout.post);
// //POST signup
// router.post("/signup", signup.post);

// module.exports = router;
