// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

// EventEmitter 类
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('some_event', function () {
    console.log("some_event事件触发")
})
setTimeout(function () {
    eventEmitter.emit('some_event');
}, 1000)
// 1 秒后控制台输出了 'some_event 事件触发
// 其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
// on 函数用于绑定事件函数，emit 属性用于触发一个事件
eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log("listener1", arg1, arg2)
})
eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log("listener2", arg1, arg2)
})
eventEmitter.emit('someEvent', "参数 arg1", "参数 arg2")
// listener1 参数 arg1 参数 arg2
// listener2 参数 arg1 参数 arg2


var listener1 = function listener1() {
    console.log("listener1执行")
}
var listener2 = function listener2() {
    console.log("listener2执行")
}
// 绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection', listener1);
// 绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection', listener2);
var count = eventEmitter.listenerCount('connection');
console.log(count + " 个监听器监听连接事件");
// 处理connection事件
eventEmitter.emit("connection");
// 移出监听绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1不受监听")
// 触发连接事件
count = eventEmitter.listenerCount('connection');
console.log(count + " 个监听器监听连接事件");
eventEmitter.emit('connection');
console.log("程序执行完毕");
// 2 个监听器监听连接事件
// listener1执行
// listener2执行
// listener1不受监听
// 1 个监听器监听连接事件
// listener2执行
// 程序执行完毕


// error 事件
// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
var events1 = require('events');
var eventEmitter1 = new events1.EventEmitter();
eventEmitter1.emit('error')

// 继承 EventEmitter
// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
// 原因有两点:
// 1.具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。
// 2.JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。