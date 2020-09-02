const { createServer } = require('http')
const express = require('express')
const session = require('./passport');
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

app.prepare().then(() => {
  createServer((req, res) => {
    const server = express();

    
    server.use('/login',session.passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
      req.token = session.generateToken(req.username);
      res.json({
        token: req.token,
        user: req.username
        });
    });
    server.get('/', session.passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
      res.json(req.username);
    });
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    
app.use(session.passport.initialize())
app.use(passport.session())
    
    server.get('/', (req, res) => {
      res.send('this server custom next js')
      return handle(req, res)
    })
   
  }).listen(3003, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3003')
  })
})