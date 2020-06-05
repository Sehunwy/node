// 异步编程依托于回调来实现

// 阻塞代码
var fs = require('fs');
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log("程序执行结束！")
// node练习
// 程序执行结束！

// 非阻塞代码
fs.readFile('input.txt', function (err, data) {
    if (err) return console.log(err)
    console.log(data.toString())
})
console.log("程序执行结束!")
// 程序执行结束!
// node练习