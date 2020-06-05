// 1.引入require，使用require载入http模块
var http = require('http');
// 2.创建服务器
http.createServer(function(request,response) {
    // 发送http头部
    response.writeHead(200,{'Content-Type':'text/plain'});
    // 发送响应数据
    response.end('Hello World')
}).listen(3000);