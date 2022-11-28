const user = require("./user.models")
const role = require("./role.models")
const refreshToken = require("./refreshToken.models")

role.belongsToMany(user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

user.belongsToMany(role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

refreshToken.belongsTo(user, {
  foreignKey: 'userId', targetKey: 'id'
});
user.hasOne(refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

ROLES = ["user", "admin", "moderator"];