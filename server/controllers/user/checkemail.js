const { user } = require("../../models");

module.exports = async (req, res) => {
  console.log("req", req.body);
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: "Bad Requset" });
  }
  const userInfo = await user.findOne({
    where: {
      email: email,
    },
  });
  console.log("email", userInfo);
  if (!userInfo) {
    res.status(201).send("ok");
  } else {
    res.status(404).send("already exist");
  }
};
