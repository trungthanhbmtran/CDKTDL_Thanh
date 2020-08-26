const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { poolPromise } = require('../Connection/db')


/* SECRET */
var server_secret = 'this is extremely secret!';

passport.use(new LocalStrategy(
   async function(username, password, done) {
    const pool = await poolPromise
    const result = await pool.request()
    .query(`select UserName,Pass from HMR_Users where UserName='${username}' and Pass ='${password}' `, function (err, profileset) {
      if (err) {
          console.log(err)
          return done(null,false)
      }
      else
          return profileset.recordset
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = {
  passport: passport,
  check: expressJwt({secret: server_secret}),
  generateToken(user) {
    return jwt.sign({
      user: user
    }, server_secret, {
      expiresIn: 120 * 60
    });
  }
}