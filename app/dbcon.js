var mysql = require('mysql');
var pool = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'cookbook'
});
module.exports.pool = pool;
