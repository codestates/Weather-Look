const { user } = require("../../models");
const { isAuthorized } = require("../function/index");

module.exports = async (req, res) => {
  //jwt확인
  const accessTokenData = isAuthorized(req);
  //확인된게 없다면
  console.log("auth", accessTokenData);
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "not authorized" });
  } else {
    const { id } = accessTokenData;
    const data = await user.findOne({ where: { id } });
    delete data.dataValues.password;
    res
      .status(200)
      .send({ data: { userInfo: data.dataValues }, message: "ok" });
  }
};
