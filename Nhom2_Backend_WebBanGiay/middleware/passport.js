const passport = require("passport");
const googleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: "401989722893-47n8574skpjucnf82j45jg5ujldjob45.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      //console.log(profile);
      cb(null,profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;