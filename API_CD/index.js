const _expressPackage = require("express");  
//Initilize app with express web framework  
const app = _expressPackage(); 
const _bodyParserPackage = require("body-parser"); 
const passport = require('passport')
const cors = require("cors");
const userRoute = require('./Controller/Users')
const loginRoute = require('./Controller/Login')
const staffRoute = require('./Controller/Staff')
const scoreRoute = require('./controller/Score')
const studentRoute = require('./controller/Student')
const session = require('./passport/passport');

app.use(session.passport.initialize())
app.use(passport.session())
//To parse result in json format  
const cookieParser = require("cookie-parser");
app.use(_bodyParserPackage.json()); 
app.use(_bodyParserPackage.urlencoded({extended: true }));  
// Connection string parameters.
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
});  
//middware require router
app.use('/users', userRoute);
app.use('/login',session.passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	
	req.token = session.generateToken(req.username);
	res.json({
		token: req.token,
		user: req.username
    });
});
app.use('/staff',staffRoute);
app.use('/score',scoreRoute);
app.use('/student',studentRoute);

app.get('/me', session.check, function(req, res) {
    res.json(req.username);
  });
  
//Lets set up our local server now.  
const server = app.listen(process.env.PORT || 3001, function () {  
    const port = server.address().port;  
    console.log("App now running on port", port);  
});  
  
//Set up your sql connection string, i am using here my own, you have to replace it with your own.  

  
//Function to connect to database and execute query  

  
//GET API  
