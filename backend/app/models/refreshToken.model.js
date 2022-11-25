const config = require("../config/auth.config");
const { v4: uuidv4 } = require("uuid");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./index.js");

class RefreshToken extends Models { }
RefreshToken.init({
  token: {
    type: Sequelize.STRING,
  },
  expiryDate: {
    type: Sequelize.DATE,
  },
}, {
  sequelize,
  modelName: "refreshToken",
})

RefreshToken.createToken = async function (user) {
  let expiredAt = new Date();

  expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

  let _token = uuidv4();

  let refreshToken = await this.create({
    token: _token,
    userId: user.id,
    expiryDate: expiredAt.getTime(),
  });

  return refreshToken.token;
};

RefreshToken.verifyExpiration = (token) => {
  return token.expiryDate.getTime() < new Date().getTime();
};

module.exports = RefreshToken;

