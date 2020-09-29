const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')////////
const connectMongodbSession = require('connect-mongodb-session');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const db = require('./db.js');
const {poolPromise} = require('./db_sql');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoStore = connectMongodbSession(session);
const imwSession = new mongoStore({uri: "mongodb://localhost/imw", collection: 'sessions'});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

function ensureAuthenticatedLogin(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else{
        return next();
    }
}

app.prepare()
.then(() => {
    const server = express();
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    server.use(
        session({
            resave: false,
            saveUninitialized: true,
            secret: 'pAgGxo8Hzg7PFlv1HpO8Eg0Y6xtP7zYx',
            name: 'session',
            cookie: {
                path: '/',
                httpOnly: true,
                maxAge: oneMonth,
                expires: new Date(Date.now() + oneMonth)
            },
            imwSession
        })
    );

    //////////////////////////
    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: true }));
    //parse application/json
    server.use(bodyParser.json());

    server.use(passport.initialize());
    server.use(passport.session());

    server.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: 'Invalid username or password.'
    }), function(req, res) {
      console.log(req.session.passport)
       //console.log(res)
        //console.log(req.body.username)
        jwt.sign({_id: req.session.passport.user}, 'abc123@@xyz789', { expiresIn: '30 days' }, (err, accessToken) => {
            res.cookie('accessToken', accessToken, { maxAge: oneMonth });// httpOnly: true
            res.cookie('name', req.body.username, { maxAge: oneMonth });// httpOnly: true
           res.cookie('unknow',  req.session.passport.user, { maxAge: oneMonth });
            // var store_id = req.cookies.store_id;
            // if (store_id === undefined && req.baseUrl != '/stores') {
            //   res.redirect('/stores');
            // }
           res.redirect('/');
        });
    });

    server.get('/auth/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        }), function (req, res) {});
    
    server.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/login',
        //successRedirect: '/'
     }), function (req, res) {
        //console.log(req);
        jwt.sign({_id: req.user.uid, email: req.user.email}, 'abc123@@xyz789', { expiresIn: '30 days' }, (err, accessToken) => {
            res.cookie('accessToken', accessToken, { maxAge: oneMonth });// httpOnly: true
            res.cookie('name', req.user.name, { maxAge: oneMonth });// httpOnly: true
            res.cookie('email', req.user.email, { maxAge: oneMonth });// httpOnly: true

            // var store_id = req.cookies.store_id;
            // if (store_id === undefined && req.baseUrl != '/stores') {
            //   res.redirect('/stores');
            // }
            res.redirect('/');
        });
    });

    server.get('/auth/facebook', passport.authenticate('facebook', {
            scope: 'basic_info,email'
        }), function (req, res) {});

    server.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login',
        successRedirect: '/'
    }), function (req, res) {
        res.redirect('/');
    });

    server.get("/", ensureAuthenticated);
    server.get("/login", ensureAuthenticatedLogin);
    server.get("/staff/staffs", ensureAuthenticated);
    server.get("/scores/addscores", ensureAuthenticated);
    server.get("/scores/score", ensureAuthenticated);
    server.get("/staff/addstaff", ensureAuthenticated);

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(3002, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3002')
    });

    passport.use(
        new localStrategy(
            async function(username, password, done) {
               // db.findOne({ email: username, password: password }, function (err, user) {
              //      if (err) { return done(err); }
            //        if (!user) { return done(null, false); }
                    //if (!user.verifyPassword(password)) { return done(null, false); }
                //    return done(null, user);
              //  });
              const pool = await poolPromise
              const result = await pool.request()
              .query(`select * from HMR_Users where UserName='${username}' and Pass ='${password}' `, function (err, user) {
                    if (err) { return done(err); }
                    if (!user) { return done(null, false); }
                        //if (!user.verifyPassword(password)) { return done(null, false); }
                    return done(null, user, {
                        message: 'Logged In Successfully'
                      });
              })  
            }
        )
    );

    passport.use(
        new googleStrategy({
            clientID: "26364853205-knvp9risf9lh4rbe1j05d7batlnllptp.apps.googleusercontent.com",
            clientSecret: "rexSEOJ2EukmdZFVroCs0-TB",
            callbackURL: "http://localhost:3002/auth/google/callback",
            accessType: 'offline'
        }, function (accessToken, refreshToken, profile, done) {
            //console.log(profile);
            db.findOne({uid: profile._json.sub}, (err, user) => {
                if(err) return done(err);
                if(user) return done(null, user);
                const newUser = new db({
                    uid: profile._json.sub,
                    name: profile._json.name,
                    email: profile._json.email,
                    password: 'abc123@@',
                    picture: profile._json.picture
                });
                newUser.save((err) => {
                    return done(null, newUser);
                });
            })
        }
    ));

    passport.use(
        new facebookStrategy({
            clientID: "611968872488736",
            clientSecret: "c1a4ef08e16aaaaf54a931fb45e80e18",
            callbackURL: "http://localhost:3002/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'email', 'photos']
        }, function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            db.findOne({uid: profile._json.sub}, (err, user) => {
                if(err) return done(err);
                if(user) return done(null, user);
                const newUser = new db({
                    uid: profile._json.sub,
                    name: profile._json.name,
                    email: profile._json.email,
                    password: 'abc123@@',
                    picture: profile._json.picture
                });
                newUser.save((err) => {
                    return done(null, newUser);
                });
            })
        }
    ));

    passport.serializeUser(function (user,done) {
        //Lấy được từ googleStrategy
        done(null, user.recordset[0].User_ID);
    });

    passport.deserializeUser(async function (User_ID, done) {
        //Lấy được từ serializeUser
      //  db.findOne({uid: uid}, (err, user) =>{
        //    done(null, user);
        //});
        const pool = await poolPromise
        const result = await pool.request()
        .query(`select User_ID from HMR_Users where User_ID='${User_ID}' `, (err, user) =>{
                done(null,user)
        })  
    });

})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
