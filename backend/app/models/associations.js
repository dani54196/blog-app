const user = require("../models/user.model.js")
const role = require("../models/role.model.js")
const refreshToken = require("../models/refreshToken.model.js")

role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});
user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

ROLES = ["user", "admin", "moderator"];