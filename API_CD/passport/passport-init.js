const { poolPromise } = require('../Connection/db')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function () {

    passport.serializeUser(function (user, done) {
        console.log('serializing user:', user);
        done(null, user);
    });

    passport.deserializeUser(function (username, done) {
        console.log('deserializing user:', username);
        done(null,username);
    });
    
    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
       async function (req, username, password, done) {
        try {
            const {username,password} = req.body
            const pool = await poolPromise
            const result = await pool.request()
            .query(`select User_ID,UserName,Pass from HMR_Users where UserName='${username}' and Pass ='${password}' `, function (err, profileset) {
                if (err) {
                    return done(err)
                    console.log(err)
                }
                else {
                    const send_data = profileset.recordset;
                    res.json(send_data);
                    return done(null,send_data.UserName)
                }
            })  
        } catch (err) {
            res.status(400).json({ message: "invalid" })
            res.send(err.message)
        }
        }
        ));
    };