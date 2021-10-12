const { user } = require("../../models");

module.exports = async (req, res) => {
  const deleteUser = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (deleteUser !== null) {
    deleteUser.destroy({
      truncate: true,
    });
    res.status(200).send("success");
  } else {
    res.status(409).send("passwords do not match");
  }
};
