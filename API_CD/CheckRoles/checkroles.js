const { poolPromise } = require('../Connection/db')
const jwt = require('jsonwebtoken'); 

 module.exports.checkRoles = async (req,res,next) =>{
   //console.log(req.headers.token)
    try {
      const _decode = jwt.decode(req.headers.token)
      const pool = await poolPromise
      const result = await pool.request()
          .query(`SELECT * FROM HMR_USERS where User_ID=${_decode._id}`, function (err, profileset) {
              if (err) {throw err}
              else {
               //   console.log(profileset.recordset[0])
                  const roles = profileset.recordset[0].id_nv;
                 // console.log(roles)
                  if(roles ===512){
                   // console.log(`${roles} duoc phep truy cap`)
                    return next()
                  }
                  else{
                  //  console.log(`${roles} khong duoc phep truy cap`)
                    res.json(`ban khong duoc cap quyen nay`)
                  }
              }
          })
  } catch (err) {
      res.status(500)
      res.send(err.message)
  }
}

