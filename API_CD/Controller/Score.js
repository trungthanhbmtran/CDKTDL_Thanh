const express = require('express')
const router = express.Router()
const { poolPromise } = require('../Connection/db')

router.get('/1', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`select * from QLSV_DM_LOAIDIEM `, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    var send_data = profileset.recordset;
                    res.json(send_data);
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.get('/2', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`select MADONVI,TENDONVI from HMR_DONVI `, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    var send_data = profileset.recordset;
                    res.json(send_data);
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.post('/detailstaff', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`select * from HMR_Users where UserName='${req.body.username}' `, function (err, profileset) {
            if (err) {
                console.log(err)
            }
            else {
                const send_data = profileset.recordset;
                res.json(send_data);
            }
        })  
    } catch (err) {
        res.status(400).json({ message: "invalid" })
        res.send(err.message)
    }
})



router.post('/add', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .input("ID_SV_MH",sql.int,req.body.ID_SV_MH)
        .input("ID_Loaidiem",sql.int,req.body.ID_Loaidiem)
        .input("Sodiem",sql.float,req.body.Sodiem)
        .input("Ghichu",sql.varchar(150),req.body.Ghichu)
        .input("Ngaynhap",sql.date,req.body.Ngaynhap)
        .input("Nguoinhap",sql.int,req.body.Nguoinhap)
        .input("Ngaysua",sql.date,req.body.Ngaysua)
        .input("Nguoisua",sql.int,req.body.Nguoisua)
        .input("Trangthai",sql.bit,req.body.Trangthai)
            .execute("INSERT_SCORE").then(function (recordSet) {
                res.status(200).json({ status: "Success" })
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