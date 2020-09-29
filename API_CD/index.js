const _expressPackage = require("express");  
//Initilize app with express web framework  
const app = _expressPackage(); 
const _bodyParserPackage = require("body-parser"); 
const cors = require("cors");
const userRoute = require('./Controller/Users')
const staffRoute = require('./Controller/Staff')
const scoreRoute = require('./controller/Score')
const studentRoute = require('./controller/Student')
const classRoute = require('./Controller/Class')
const semesterRoute = require('./Controller/Semester')



//To parse result in json format  
const cookieParser = require("cookie-parser");
app.use(_bodyParserPackage.json()); 
app.use(_bodyParserPackage.urlencoded({extended: true }));  
// Connection string parameters.
app.use(cors());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// init roles


//middware require router
app.use('/users', userRoute);
app.use('/staff',staffRoute);
app.use('/score',scoreRoute);
app.use('/student',studentRoute);
app.use('/class',classRoute);
app.use('/semester',semesterRoute);


  
//Lets set up our local server now.  
const server = app.listen(process.env.PORT || 3001,function () {  
  const host = server.address().address
  const port = server.address().port
 
    console.log("App now running on port", port);  
});  
  
//Set up your sql connection string, i am using here my own, you have to replace it with your own.  

  
//Function to connect to database and execute query  

  
//GET API  
