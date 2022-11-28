const userCtrl = {}

userCtrl.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

userCtrl.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

userCtrl.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

userCtrl.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

module.exports = userCtrl;