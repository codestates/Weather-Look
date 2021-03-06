const { user } = require("../../models");
const { signAccessToken, sendAccessToken } = require("../function/index");

module.exports = async (req, res) => {
  console.log("req--", req.body);
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  if (!userInfo) {

    res.status(401).send({ message: "Invalid user or Wrong password" });

    console.log("userInfo--");

  } else {
    const sign = signAccessToken(userInfo.dataValues);
    sendAccessToken(res, sign);
  }
};
