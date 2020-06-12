var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: '3306',
    database: 'user'
})
connection.connect();
var sql = 'select * from user1'
// 查询数据
connection.query(sql, function (err, result) {
    if (err)
        console.log(err.message);
    console.log(result)
});
// 插入数据
var addSql = "insert into user1 values('Linda',23,'women')";
connection.query(addSql, function (err, result) {
    if (err) {
        console.log(err.message)
    }
    console.log(result)
})
// 更新数据
var modSql = "update user1 set age=18 where name='Linda'";
connection.query(modSql, function (err, result) {
    if (err)
        console.log(err.message);
    console.log(result);
})
// 删除数据
var delSql = 'delete from user1 where name="Linda"';
connection.query(delSql, function (err, result) {
    if (err)
        console.log(err.message);
    console.log(result);
})
connection.end();