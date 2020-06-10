// npm install express --save
// Express 框架核心特性：
// 1.可以设置中间件来响应 HTTP 请求。
// 2.定义了路由表用于执行不同的 HTTP 请求动作。
// 3.可以通过向模板传递参数来动态渲染 HTML 页面

var express = require('express');
var app = express();
// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 
// 地址栏访问http://localhost:3000/img/pic2.jpg
app.use('/img', express.static('img'));
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// 文件上传
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html')
})
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer'); // npm install multer --save 用于处理处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'))
app.post('/file_upload', function (req, res) {
    console.log(req.files[0]); // 上传文件信息
    var des_file = __dirname + '/tmp/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file,data,function(err) {
            console.log(des_file)
            if(err) {
                console.log(err)
            }
            else {
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response))
        })
    })
})

// cookie管理
var cookieParser = require('cookie-parser'); // npm install cookie-parser --save  解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
var util = require('util');
app.use(cookieParser)
app.get('/',function(req,res) {
    console.log("cookie: "+util.inspect(req.cookies));
    res.send(util.inspect(req.cookies))
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})