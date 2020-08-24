const express = require('express')
const router = express.Router()
const { poolPromise } = require('../Connection/db')

router.get('/brenches', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT * FROM QLSV_DM_NGANHNGHE`, function (err, profileset) {
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
router.get('/students', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT A.ID_Sinhvien,A.ID_SV_MH,B.HOTEN,A.ID_Mon_Lophoc FROM QLSV_SINHVIEN_MONHOC A
            INNER JOIN QLSV_SINHVIEN  B ON A.ID_Sinhvien=B.MANHANVIEN  `, function (err, profileset) {
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


router.get('/classes', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT * FROM QLSV_DM_LOPHOC`, function (err, profileset) {
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
router.get('/subjects', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT B.ID_Mon_Lophoc,B.ID_Lophoc,c.Ten_Monhoc FROM QLSV_DM_MON_KHOA_NAM A
            INNER JOIN QLSV_DM_MON_LOP_NAM B ON A.ID_Mon_Khoa=B.ID_Mon_Khoa
            INNER JOIN QLSV_DM_MONHOC C ON A.ID_Monhoc=C.ID_Monhoc`, function (err, profileset) {
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

router.get('/typescores', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT * FROM QLSV_DM_LOAIDIEM `, function (err, profileset) {
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

router.get('/departments', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`select ID_Donvi,TENDONVI from HMR_DONVI `, function (err, profileset) {
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

router.get('/studentscores', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT TOP 50 * FROM viewQLSV_Diem_Sinhvien`, function (err, profileset) {
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



router.post('/add', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`INSERT INTO QLSV_DM_DIEMSINHVIEN
            VALUES (86670,1,2,3,null,null,null,null,1)`, function (err, profileset) {
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