const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    let token = sign(data, process.env.ACCESS_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 24 * 14}s`,
    });
    return token;
  },

  generateRefreshToken: (data) => {
    let token = sign(data, process.env.REFRESH_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 24 * 14}`,
    });
    return token;
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
    });
  },

  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
    });
  },

  checkRefresh: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },

  checkAccess: (accessToken) => {
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
