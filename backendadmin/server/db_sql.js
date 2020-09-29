const _sqlPackage = require("mssql");

const dbConfig = {
    user: 'thanhkute',
    password: '123456',
    server: 'localhost',
    database: 'ERP'
}

const poolPromise = new _sqlPackage.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
module.exports = {
    _sqlPackage, poolPromise
}  