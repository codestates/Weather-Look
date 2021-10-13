require("dotenv").config();
const jwt = require("jsonwebtoken");
const { user } = require("../../models");

module.exports = async (req, res) => {
  // const authorization = req.headers.authorization;
  // if (!authorization) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // const accessToken = authorization.split(" ")[1];
  // const data = jwt.verify(accessToken, process.env.ACCESS_SECRET);

  // if (!data) {
  //   return res.status(401).json({ message: "Invalid access token" });
  // }
  const { email } = req.body.email;
  const inform = await user.findOne({
    where: { email: email },
  });
  if (!inform) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const newNick = req.body.nickname;
  const newPass = req.body.password;

  if (!newNick && !newPass) {
    return res.status(400).json({ message: "Bad Request" });
  }
  if (!newNick) {
    await inform.update({ nickname: newPass });

    return res.status(200).json({ message: "completed" });
  }
  if (!newPass) {
    await inform.update({ password: newNick });

    return res.status(200).json({ message: "completed" });
  }
  if (newNick && newPass) {
    await inform.update({ nickname: newPass, password: newNick });

    return res.status(200).json({ message: "completed" });
  }
};

// 비밀번호?
