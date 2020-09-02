const express = require('express');
const session = require('express-session');
const connectMongodbSession = require('connect-mongodb-session');
const passport = require('passport')
const facebookStrategy = require('passport-facebook').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const db = require('./db.js');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoStore = connectMongodbSession(session);
const store = new mongoStore({uri: "mongodb://localhost/imw_shop", collection: 'sessions'});

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
            store
        })
    );

    server.use(passport.initialize());
    server.use(passport.session());

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

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(3001, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3001')
    });

    passport.use(
        new googleStrategy({
            clientID: "26364853205-knvp9risf9lh4rbe1j05d7batlnllptp.apps.googleusercontent.com",
            clientSecret: "rexSEOJ2EukmdZFVroCs0-TB",
            callbackURL: "http://localhost:3001/auth/google/callback",
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
            callbackURL: "http://localhost:3001/auth/facebook/callback",
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
                    picture: profile._json.picture
                });
                newUser.save((err) => {
                    return done(null, newUser);
                });
            })
        }
    ));

    passport.serializeUser(function (user, done) {
        //Lấy được từ googleStrategy
        done(null, user.uid);
    });

    passport.deserializeUser(function (uid, done) {
        //Lấy được từ serializeUser
        db.findOne({uid: uid}, (err, user) =>{
            done(null, user);
        });
    });

})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})