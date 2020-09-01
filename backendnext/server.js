const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const passport = require('passport');
const passportlocal = require('passport-local').Strategy
const session = require('express-session')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({extended: true}))
  server.use(session({
    secret :" avcb",
    cookies:{
        maxAge: 1000*60*5
    }
}))
server.use(passport.initialize())
server.use(passport.session())
server.use(passport.session())

server.route('/login')
.post(passport.authenticate('local',{failureRedirect:'/login'}))

passport.use(new passportlocal(
    (username,password,done) =>{

    }
))

passport.serializeUser((user,done)=>{
    done(null,data[0].username)
})

passport.deserializeUser((name,done)=>{

})


  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  }
  server.get("/", ensureAuthenticated);
  server.use("/stores", ensureAuthenticated);
  server.use("/analytics", ensureAuthenticated);
  server.get('/', (req, res) => {
    res.send('this server custom next js')
    return handle(req, res)
  })
  
  server.listen(3003, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3003')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})