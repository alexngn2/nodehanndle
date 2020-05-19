// require package
const mysql = require('mysql2')
// create connection file
let  defaultConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Gjq.19901011',
  database: 'burgers_db'
}

// set to heroku db environment variable if exists 
if(process.env.JAWSDB_URL) defaultConfig = process.env.JAWSDB_URL

// export module
module.exports = mysql.createConnection(defaultConfig).promise()