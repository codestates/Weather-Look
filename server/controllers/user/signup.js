const { user } = require("../../models");
const { signAccessToken } = require("../function/index");

module.exports = async (req, res) => {
  console.log("req", req.body);
  const { email, password, nickname, gender } = req.body.userInfo;
  if (!email || !password || !nickname || !gender) {
    return res.status(400).send({ message: "Bad Requset" });
  }
  const userInfo = await user.findOne({
    where: {
      email: email,
      password: password,
      nickname: nickname,
      gender: gender,
    },
  });
  if (userInfo === null) {
    const newUserId = await user.create({
      email: email,
      password: password,
      nickname: nickname,
      gender: gender,
    });
    const newAccToken = signAccessToken(newUserId.dataValues);
    res.set(
      "Set-Cookie",
      `jwt = ${newAccToken}; Domain = "https://localhost:4000"; Path = /user/signup; SameSite; Secure; HttpOnly = true;`
    );
    res.status(201).json({ message: "created" });
  } else {
    res.status(409).send({ message: "This email already exists!" });
  }
};
