// domain(域)简化异步代码的异常处理，可以捕捉try catch无法捕捉的异常
var eventEmitter = require('events').EventEmitter;
var domian = require('domain');
var emitter1 = new eventEmitter();
// 创建域
var domain1 = domian.create();
domain1.on('error', function (err) {
    console.log("domain1处理这个错误（" + err.message + "）");
})
// 显式绑定
domain1.add(emitter1)
emitter1.on('error', function (err) {
    console.log("监听器处理此错误（" + err.message + "）");
})
emitter1.emit('error',new Error('通过监听器来处理'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error('通过domain1处理'));
var domain2 = domian.create();
domain2.on('error',function(err) {
    console.log("domain2处理这个错误（" + err.message + "）");
})
// 隐式绑定
domain2.run(function(){
    var emitter2 = new eventEmitter();
    emitter2.emit('error',new Error('通过domain2处理'))
})
domain1.remove(emitter1);
emitter1.emit('error',new Error('转换为异常，系统将崩溃'))

