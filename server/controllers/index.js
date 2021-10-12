module.exports = {
  login: require("./user/login"),
  logout: require("./user/logout"),
  signup: require("./user/signup"),
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
