const { user } = require("../../models");

module.exports = async (req, res) => {
  console.log("checkreq", req.body);
  const { email, password } = req.body;
  console.log("checkreq111", email, password);
  if (!email || !password) {
    return res.status(400).send({ message: "Bad Requset" });
  }
  const userInfo = await user.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  console.log("checkpassword", userInfo);
  if (userInfo) {
    res.status(201).send({ message: "ok" });
  } else {
    res.status(404).send({ message: "fail" });
  }
};
