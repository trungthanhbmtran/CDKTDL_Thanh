const express = require('express')
const router = express.Router()
const passport = require('passport');
const { poolPromise } = require('../Connection/db')



router.post('/', async (req, res) => {
    try {
        const {username,password} = req.body
        const pool = await poolPromise
        const result = await pool.request()
        .query(`select UserName,Pass from HMR_Users where UserName='${username}' and Pass ='${password}' `, function (err, profileset) {
            if (err) {
                console.log(err)
            }
            else {
                const send_data = profileset.recordset;
                const payload = {username};
                const token = jwt.sign(payload, secretShh, {
                    expiresIn: '1h'
                  });
                  res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                res.json(send_data);
            }
        })  
    } catch (err) {
        res.status(400).json({ message: "invalid" })
        res.send(err.message)
    }
})


router.delete('/', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .input("id", sql.Int, req.body.id)
            .execute("DeleteProfile").then(function (err, recordSet) {
                res.status(200).json({ status: "Success" })
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}) 
module.exports = router;