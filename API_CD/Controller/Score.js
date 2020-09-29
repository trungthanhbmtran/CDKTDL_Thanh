const express = require('express')
const router = express.Router()
const { poolPromise } = require('../Connection/db')
const {checkRoles} = require('../CheckRoles/checkroles')



router.get('/brenches', async (req,res) => {
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
            INNER JOIN QLSV_SINHVIEN  B ON A.ID_Sinhvien=B.MANHANVIEN AND A.Trangthai NOT IN (1) `, function (err, profileset) {
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

router.get('/departments',async (req, res) => {
    console.log(req.cookies)
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`select ID_Donvi,TENDONVI from HMR_DONVI  where MADONVI in(02,03,04,05,06)`, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    const send_data = profileset.recordset;
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
            .query(`select a.* from dbo.QLSV_BangDiem a
            inner join HMR_Users b
            on a.ID_GV=b.id_nv
            where b.User_ID='7904'`, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    const send_data = profileset.recordset;
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
    console.log(req.body)
   // console.log(req,body.ID_SV_MH)
    //console.log(req.body.ID_LoaiDiem)
   // console.log(req.body.Sodiem)
    //console.log(req.body.Ghichu)
    try {
        let _time = new Date().toISOString();
        console.log(_time)
        const pool = await poolPromise
        const result = await pool.request()
            .query(`select count(*)as a from QLSV_DM_DIEMSINHVIEN where ID_SV_MH=${req.body.ID_SV_MH} AND ID_LOAIDIEM=${req.body.ID_LoaiDiem}`, async function(err,profileset){
                console.log(profileset.recordset[0].a)
                if(profileset.recordset[0].a !==0){
                 res.json(`Error :${req.body.ID_SV_MH} and ${req.body.ID_LoaiDiem} da duoc nhap truoc do`)
                  console.log(err)
                }
                else{
                    const resultcheck = await pool.request()
                    .query(`INSERT INTO QLSV_DM_DIEMSINHVIEN
                    VALUES (${req.body.ID_SV_MH},${req.body.ID_LoaiDiem},${req.body.Sodiem},'${req.body.Ghichu}','${_time}',null,null,null,0)`, function (err, profileset) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            const send_data = profileset.recordset;
                            res.json(`Add success ${req.body.ID_SV_MH} `);
                        }
                    })
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})
router.post('/update',checkRoles,async (req, res) => {
    try {
        let _time = new Date().toISOString();
        console.log(req.body.ID_LoaiDiem)
        const pool = await poolPromise
        const result = await pool.request()
            .query(`
            UPDATE QLSV_DM_DIEMSINHVIEN
SET Sodiem =${req.body.SodiemEdit} ,Nguoisua=${req.body.Nguoisua},Ngaysua='${_time}'
WHERE ID_SV_MH='${req.body.ID_SV_MH}' and ID_Loaidiem='${req.body.ID_LoaiDiem}'`, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    var send_data = profileset.recordset;
                    console.log(send_data)
                    res.json(`Edit success with ${req.body.ID_SV_MH} , TypeScore ${req.body.ID_LoaiDiem} and  Now is ${_time} `);
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.post('/delete', async (req, res) => {
    try {
        console.log(req.body.ID_Loaidiem)
        const pool = await poolPromise
        const result = await pool.request()
            .query(`
            UPDATE QLSV_DM_DIEMSINHVIEN
SET Nguoisua=${req.body.Nguoisua},Ngaysua='${req.body.Ngaysua},TrangThai=1'
WHERE ID_SV_MH='${req.body.ID_SV_MH}' and ID_Loaidiem='${req.body.ID_Loaidiem}'`, function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    var send_data = profileset.recordset;
                    console.log(send_data)
                    res.json(`Delete success with ${req.body.ID_SV_MH} , TypeScore ${req.body.ID_Loaidiem} and  Now is ${req.body.Ngaysua} `);
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}) 
router.get('/list',async (req,res)=>{
    let page = req.query.page || 1;
    let searchName = req.query.searchName;
    let searchDepartments = req.query.searchDepartments 
    //console.log(page)
    try {
        //console.log(req.query) //truyen gia tri tu get
        const pool = await poolPromise
        const result = await pool.request()
            .query(`
            select count(*) as total from dbo.QLSV_BangDiem a
    inner join HMR_Users b
    on a.ID_GV=b.id_nv
   ` 
            ,async (err, profileset) => {
                if (err) {
                    res.status(304)
                    console.log(err)
                }
                else {
                    const totalRecords = profileset.recordset[0].total;
                    console.log(typeof totalRecords)
                    console.log(totalRecords)
                    let current_page = 1;
                    if (page) {
                        current_page = page;
                    }
                    let limit = req.query.limit || 100;
                    console.log(req.query.limit)
                    let total_page = Math.ceil(totalRecords / limit);
                    console.log(total_page)
                    if (current_page > total_page) {
                        current_page = total_page;
                    } else if (current_page < 1) {
                        current_page = 1;
                    }
                    let start = (current_page - 1) * limit;
                    console.log(start)
                    let end = (current_page) * limit
                    console.log(end)
                    const pool = await poolPromise
                    const result = await pool.request()
                        .query(`  SELECT  *
                        FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY ID_SV_MH ) AS RowNum, *
                               FROM     dbo.QLSV_BangDiem a
                                  inner join HMR_Users b
                                  on a.ID_GV=b.id_nv
                                ) AS RowConstrainedResult
                        WHERE   RowNum >= ${start}
                            AND RowNum <${end} 
                        ORDER BY RowNum`, function(err,profileset){
                            if(err){
                                console.log(err)
                            }
                            else {
                                const dataQuery = profileset.recordset;
                                console.log(dataQuery)
                                var data = [];
                                dataQuery.forEach(function(item) {
                                    data.push({
                                        Ten_Lophoc: item.Ten_Lophoc,
                                        Ten_Monhoc: item.Ten_Monhoc,
                                        HOTEN : item.HOTEN,
                                        MSV : item.MSV,
                                        ID_GV : item.ID_GV,
                                        ID_SV_MH : item.ID_SV_MH,
                                        tx1 : item.tx1,
                                        tx2 : item.tx2,
                                        tx3 : item.tx3,
                                        tx4 : item.tx4,
                                        tx5 : item.tx5,
                                        dk1 : item.dk1,
                                        dk2 : item.dk2,
                                        dk3 : item.dk3,
                                        dk4 : item.dk4,
                                        dk5 : item.dk5,
                                        dk6 : item.dk6,
                                        dk7 : item.dk7,
                                        dk8 : item.dk8,
                                        kt1 : item.kt1,
                                        kt2 : item.kt2
                                    });
                                });
                                let jsonResult = {
                                    info: 0,
                                    current_page: current_page,
                                    per_page: limit,
                                    total_page: total_page,
                                    total: totalRecords
                                };
                                jsonResult = { ...jsonResult,
                                    data: data
                                };
                                return res.send(jsonResult);
                            }
                        })
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})
router.get('/search',async (req,res)=>{
    let searchName = req.query.searchName;
    let searchDepartments = req.query.searchDepartments
    //console.log(page)
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT * FROM QLSV_DM_NGANHNGHE where Ten_Nganhnghe='%${searchName}%'and ID_Donvi=${searchDepartments}`, function (err, profileset) {
                if (err) {
                    console.log(err)
                    res.json('khong tim thay ket qua ban tim kiem ')
                }
                else {
                    const resultRecords = profileset.recordset;
                    res.json(resultRecords);
                }
            })
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})
module.exports = router;