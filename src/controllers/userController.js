const asyncHandler = require("express-async-handler");
const { google } = require("googleapis");
const { oauth2Client } = require("../services/google");
const User = require("../models/user");

exports.user_login = (req, res) => {
  // URL generation
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });
  // Redirection to the login page
  res.redirect(url);
};

exports.user_login_callback = asyncHandler(async (req, res, next) => {
  if (req.query.error) {
    return next("An error occurred, please try again later.");
  }

  const { tokens } = await oauth2Client.getToken(req.query.code);
  oauth2Client.setCredentials(tokens);

  const oauth2 = new google.oauth2("v2");
  // Retreive user info
  const { data } = await oauth2.userinfo.get({ auth: oauth2Client });

  const userData = {
    name: data.name,
    email: data.email,
    googleID: data.id,
    picture: data.picture,
    accessToken: tokens.access_token,
  };

  // If refresh_token is present we add it to user data
  if (tokens.refresh_token) userData.refreshToken = tokens.refresh_token;

  // Update or create the user
  let user = await User.findOneAndUpdate({ googleID: data.id }, userData, {
    new: true,
    upsert: true,
  });

  // Save the access token to a session
  req.session.user = user;

  res.redirect("/projects");
});

exports.user_logout = (req, res) => {
  req.session.user = null;
  res.redirect("/");
};

exports.verify_login = (req, res, next) => {
  if (req.session.user) {
    oauth2Client.setCredentials({
      access_token: req.session.user.accessToken,
      refresh_token: req.session.user.refreshToken,
    });
    return next();
  }
  res.redirect("/");
};
