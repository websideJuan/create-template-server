// const { closeDelimiter } = require('ejs')
const mysql = require('mysql2/promise')


async function connectionDB () {
    const connection = await mysql.createConnection({
        host:'us-east.connect.psdb.cloud',
        user:'w8elmebqtvjy78qg43fm',
        password:'pscale_pw_MBFxsoxkLN33YKztqE0xRDgFX6KYICuT5w5UW3Tqnns',
        database:'expressdb',
        ssl:{
            rejectUnauthorized: false
        }
    })
    
    const result = await connection.query('SELECT 1 + 1 AS Result')
    console.log(result)
}


module.exports = connectionDB