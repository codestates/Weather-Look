require("dotenv").config();
const { user } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // const authorization = req.headers.authorization;
  // if (!authorization) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }
  // const token = authorization.split(" ")[1];
  // const data = jwt.verify(token, process.env.ACCESS_SECRET);
  // if (!data) {
  //   return res.status(401).json({ mesaage: "Invalid access token" });
  // }
  console.log("out-----", req.body);
  const { email } = req.body;
  const deleteUser = await user.findOne({
    where: { email },
  });
  console.log("out-----", deleteUser);
  if (!deleteUser) {
    return res.status(404).json({ message: "Unauthorized" });
  }
  await deleteUser.destroy();

  return res.status(200).json({ message: "success" });
};

//authorization-> headers
