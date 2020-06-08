const util = require('util');
// util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数
async function fn() {
    return 'Hello World'
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err,ret)=>{
    if(err) throw err;
    console.log(ret)
})

// util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
function Base() {
    this.name = 'base';
    this.sayHello = function() {
        console.log("hello "+this.name)
    }
}
Base.prototype.showName = function() {
    console.log(this.name)
}
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub,Base)
var objBase = new Base();
objBase.showName(); // base
objBase.sayHello(); // hello base
console.log(objBase) // Base { name: 'base', sayHello: [Function] }
var objSub = new Sub();
objSub.showName(); // sub
console.log(objSub); // Sub { name: 'sub' }

// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。 如果 colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name
    }
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true))

// util.isArray(object) 如果给定的参数 "object" 是一个数组返回 true，否则返回 false
console.log(util.isArray([])); // true
console.log(util.isArray(new Array)); // true
console.log(util.isArray({})); // false

// util.isRegExp(object) 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false
console.log(util.isRegExp(/some/)); // true
console.log(util.isRegExp(new RegExp("RegExp"))); // true
console.log(util.isRegExp({})); // false

// util.isDate(object)  如果给定的参数 "object" 是一个日期返回true，否则返回false。
console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date())); // false
console.log(util.isDate({})); // false