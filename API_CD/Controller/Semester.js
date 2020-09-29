const express = require('express')
const router = express.Router()
const { poolPromise } = require('../Connection/db')


router.get('/type', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`select * from QLSV_DM_HE_DAOTAo`, function (err, profileset) {
            if (err) {
                console.log(err)
            }
            else {
                const send_data = profileset.recordset;
                res.json(send_data)
            }
        })  
    } catch (err) {
        res.status(400).json({ message: "invalid" })
        res.send(err.message)
    }
})
router.get('/level', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`SELECT * FROM QLSV_DM_LOAIHINH_DAOTAO`, function (err, profileset) {
            if (err) {
                console.log(err)
            }
            else {
                const send_data = profileset.recordset;
                res.json(send_data)
            }
        })  
    } catch (err) {
        res.status(400).json({ message: "invalid" })
        res.send(err.message)
    }
})

router.get('/', async (req, res) => {
    let page = req.query.page || 1;
    //console.log(page)
    try {
        //console.log(req.query) //truyen gia tri tu get
        const pool = await poolPromise
        const result = await pool.request()
            .query(`
            select count(*) as total from  QLSV_DM_NIENKHOA a
            inner JOIN QLSV_DM_LOAIHINH_DAOTAO B ON A.ID_Loai_Daotao=B.ID_Loai_Daotao
            INNER JOIN QLSV_DM_HE_DAOTAO C ON A.ID_He_Daotao=C.ID_He_Daotao`
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
                        FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY A.Ten_Nienkhoa ) AS RowNum,A.Ten_Nienkhoa,Nam_Batdau,A.So_Nam,A.So_Monhoc_Batbuoc,A.So_Monhoc_Tuchon,A.Tongso_Mon_Candat,B.Tenloai_Daotao,C.Ten_He_Daotao FROM QLSV_DM_NIENKHOA a
                        inner JOIN QLSV_DM_LOAIHINH_DAOTAO B ON A.ID_Loai_Daotao=B.ID_Loai_Daotao
                        INNER JOIN QLSV_DM_HE_DAOTAO C ON A.ID_He_Daotao=C.ID_He_Daotao
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
                                        Ten_Nienkhoa: item.Ten_Nienkhoa,
                                        Nam_Batdau: item.Nam_Batdau,
                                        So_Nam : item.So_Nam,
                                        So_Monhoc_Batbuoc : item.So_Monhoc_Batbuoc,
                                        So_Monhoc_Tuchon : item.So_Monhoc_Tuchon,
                                        Tongso_Mon_Candat : item.Tongso_Mon_Candat,
                                        Tenloai_Daotao : item.Tenloai_Daotao,
                                        Ten_He_Daotao : item.Ten_He_Daotao
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
router.post('/add', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT count(*) FROM QLSV_DM_NIENKHOA A WHERE A.Ten_Nienkhoa='${req.body.Ten_Nienkhoa}'`, async function(err,profileset){
                console.log(profileset.recordset[0].a)
                if(profileset.recordset[0].a !==0){
                 res.json(`Error :${req.body.Ten_Nienkhoa} da duoc nhap truoc do`)
                  console.log(err)
                }
                else{
                    const resultcheck = await pool.request()
                    .query(`INSERT INTO QLSV_DM_LOPHOC
                    VALUES (${req.body.Ten_Nienkhoa},${req.body.Nam_Batdau},${req.body.So_Nam},${req.body.So_Nam_Batbuoc},0,${req.body.So_Mon_Tuchon},${req.body.Tongso_Mon_Candat},'${req.body.Ghichu}',0,${req.body.ID_Loai_Daotao},${req.body.ID_He_Daotao},0)`, function (err, profileset) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            const send_data = profileset.recordset;
                            res.json(`Add success with ${req.body.Ten_Nienkhoa} `);
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