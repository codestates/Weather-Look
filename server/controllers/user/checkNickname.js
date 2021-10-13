const { user } = require("../../models");

module.exports = async (req, res) => {
  console.log("NIckreq", req.body);
  const { nickname } = req.body;

  const userInfo = await user.findOne({
    where: {
      nickname: nickname,
    },
  });
  console.log("nickname", userInfo);
  if (!userInfo) {
    res.status(201).send({ message: "ok" });
  } else {
    res.status(409).send({ message: "already exist" });
  }
};
