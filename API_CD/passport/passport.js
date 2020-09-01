const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const dotenv = require('dotenv');
dotenv.config(); 

const { poolPromise } = require('../Connection/db')


/* SECRET */
var server_secret =  process.env.JWT_SECRET;

passport.use(new LocalStrategy(
   async function(username, password, done) {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`select User_ID,UserName,Pass from HMR_Users where UserName='${username}' and Pass ='${password}' `, function (err, profileset) {
            if (err) {
                console.log(err)
                return done(null,false)
            }
            else {
                const send_data = profileset.recordset;
                return done(null,send_data,send_data)
            }
        })  
    } catch (err) {
        res.status(400).json({ message: "invalid" })
        res.send(err.message)
    }
  }
));

passport.serializeUser(function(username, done) {
  done(null, username);
});

passport.deserializeUser(function(username, done) {
  done(null, username);
});

module.exports = {
  passport: passport,
  check: expressJwt({secret: server_secret, algorithms: ['RS256']}),
  generateToken(username) {
    return jwt.sign({
      username: username
    }, server_secret, {
      expiresIn: 120 * 60
    });
  }
}