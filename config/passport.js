const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // The verify callback function
    // Let's use async/await!
    async function(accessToken, refreshToken, profile, cb) {
      // A user has logged in with OAuth...
    }
  ));

  // Add to bottom of config/passport.js
passport.serializeUser(function(user, cb) {
    try {
      if (!user._id) {
        throw new Error("User object is missing _id property");
      }
      cb(null, user._id);
    } catch (err) {
      cb(err);
    }
  });

  // Add beneath searilizeUser
passport.deserializeUser(async function(id, cb) {
    try {
      const user = await User.findById(id);
      cb(null, user);
    } catch (err) {
      cb(err);
    }
  });
  