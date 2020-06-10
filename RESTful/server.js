// GET - 用于获取数据。
// PUT - 用于更新或添加数据。
// DELETE - 用于删除数据。
// POST - 用于添加数据。
var express = require('express');
var app = express();
var fs = require('fs');
var users = __dirname + '/' + 'users.json'
app.get('/listUsers', function (req, res) {
    fs.readFile(users, 'utf-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
        res.end(data)
    })
});

// /添加的新用户数据
var user = {
   "user4" : {
      "name" : "柳柳",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser',function(req,res) {
    // 读取已存在的数据
    fs.readFile(users,'utf8',function(err,data) {
        data = JSON.parse(data);
        data.user4 = user.user4;
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
        res.end(JSON.stringify(data))
    })
})

// 显示用户详情
app.get('/:id',function(req,res) {
    fs.readFile(users,'utf8',function(err,data) {
        data = JSON.parse(data);
        var user = data["user"+req.params.id];
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
        res.end(JSON.stringify(user))
    })
})

// 删除用户
app.get('/deleteUser/:id',function(req,res) {
    fs.readFile(users,'utf8',function(err,data) {
        data = JSON.parse(data);
        delete data["user"+req.params.id]
        res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        res.end(JSON.stringify(data))
    })
})


app.listen('3000')