require("dotenv").config();
const { user } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // const authorization = req.headers["authorization"];
  // if (!authorization) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {
  //   const token = authorization.split(" ")[1];

  //   jwt.verify(token, process.env.ACCESS_SECRET, async (err, data) => {
  //     if (err) {
  //       return res.status(401).send({ message: "Invalid access token" });
  //     } else {
  //       const userInfo = await user.findOne({
  //         where: { email: data.email },
  //         attributes: { exclude: ["password"] },
  //       });
  //       if (!userInfo) {
  //         return res.status(404).send({ message: "User does not exist!" });
  //       } else {
  //         return res.status(200).send({ data: { userInfo }, message: "ok" });
  //       }
  //     }
  //   });
  const { email } = req.body.email;
  const userInfo = await user.findOne({
    where: { email: email },
    attributes: { exclude: ["password"] },
  });
  if (!userInfo) {
    return res.status(404).send({ message: "User does not exist!" });
  } else {
    return res.status(200).send({ data: { userInfo }, message: "ok" });
  }
};

/*
findOne
특정 필드만 얻고자 할 경우 attributes에 배열로 필드명을 넘겨준다. 
배열안에 ['필드명', 'alise 명'] 배열로 alise를 설정할 수도 있다. 
*/
