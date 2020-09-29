const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { poolPromise } = require('../Connection/db')
const { route } = require('./Score')
//import jwt from 'jsonwebtoken'; 




router.post('/add', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT * FROM QLSV_DM_LOPHOC A WHERE A.Ma_Lophoc=${req.body.Ma_Lophoc}`, async function(err,profileset){
                console.log(profileset.recordset[0].a)
                if(profileset.recordset[0].a !==0){
                 res.json(`Error : ${req.body.Ma_Lophoc} da duoc nhap truoc do`)
                  console.log(err)
                }
                else{
                    const resultcheck = await pool.request()
                    .query(`INSERT INTO QLSV_DM_LOPHOC
                    VALUES (${req.body.Id_Lophoc},${req.body.MaLopHoc},${req.body.Ten_Lophoc},${req.body.ID_Nienkhoa},0,${req.body.ID_GV_Chunhiem},${req.body.ID_Nganhnghe},'${req.body.Ngaynhap}',${req.body.Nguoinhap},null,null,${req.body.Ghichu},0)`, function (err, profileset) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            const send_data = profileset.recordset;
                            res.json(`Add success with ${req.body.ID_SV_MH} and ${req.body.ID_LoaiDiem} `);
                        }
                    })
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})


module.exports = router;