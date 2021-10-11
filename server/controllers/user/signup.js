const { user } = require("../models");
const { signAccessToken } = require("../function/index");

module.exports = async (req, res) => {
  const { email, password, nickname, gender } = req.body;
  if (!email || !password || !nickname || !gender) {
    return res.status(400).send({ message: "Bad Requset" });
  }
  const userInfo = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      gender: req.body.gender,
    },
  });
  if (userInfo === null) {
    const newUserId = await user.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      gender: req.body.gender,
    });
    const newAccToken = signAccessToken(newUserId.dataValues);
    res.set(
      "Set-Cookie",
      `jwt = ${newAccToken}; Domain = ''; Path = /user/signup; SameSite; Secure; HttpOnly = true;`
    );
    res.status(201).json({ message: "created :)" });
  } else {
    res.status(409).send({ message: "This email already exists!" });
  }
};
