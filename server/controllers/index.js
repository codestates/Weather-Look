module.exports = {
  login: require("../controllers/user/login"),
  logout: require("../controllers/user/logout"),
  signup: require("../controllers/user/signup"),
  signout: require("../controllers/user/signout"),
  inform: require("../controllers/user/inform"),
  mypage: require("../controllers/user/mypage"),
  auth: require("../controllers/user/auth"),
  validEmail: require("../controllers/user/validEmail"),
  checkNickname: require("../controllers/user/checkNickname"),

};

// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// router.get("/", cors(), (req, res) => {
//   res.send("cors!");
// });

// const { login } = require("../controllers/user");

// //POST login
// router.post("/login", login.post);
// //POST logout
// router.post("/logout", logout.post);
// //POST signup
// router.post("/signup", signup.post);

// module.exports = router;
