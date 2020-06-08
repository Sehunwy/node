// Node.js 中的全局对象是 global
// 按照 ECMAScript 的定义，满足以下条 件的变量是全局变量:在最外层定义的变量；全局对象的属性；隐式定义的变量（未定义直接赋值的变量）
// 当你定义一个全局变量时,这个变量同时也会成为全局对象的属性,反之亦然.需要注意的是,在 Node.js 中你不可能在最外层定义变量,因为所有用户代码都是属于当前模块的,而模块本身不是最外层上下文。
// 注意： 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险

// __filename 当前正在执行的脚本的文件名（绝对路径）
console.log(__filename); // E:\code\test\node\全局对象.js

// __dirname 当前执行脚本所在的目录
console.log(__dirname); // E:\code\test\node

// setTimeout(cb,ms) 在指定的毫秒(ms)数后执行指定函数(cb)
function printHello() {
    console.log("Hello")
}
let t = setTimeout(printHello,2000)

// clearTimeout(t) 停止setTimeout定时器
clearTimeout(t)


// process
// stdout标准输出流
console.log(process.stdout.write("Hello World!"+'\n'))
// argv 返回数组，有命令行执行脚本时的各个参数组成。第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数
process.argv.forEach(function(val,index,array) {
    console.log(index+":",val)
})
// execPath 返回执行当前脚本的node二进制文件的绝对路径
console.log(process.execPath)
// env 返回对象，成员为当前shell的环境变量
// console.log(process.env) 
// version node的版本
console.log(process.version)
// versions node的版本和依赖
// console.log(process.versions)
// config 一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同
// console.log(process.config)
// pid 当前进程的进程号
console.log(process.pid)
// 进程名
console.log(process.title)
// arch 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。
console.log(process.arch); // x64
// platform 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
console.log(process.platform); // win32
// mainModule require.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模块
// console.log(process.mainModule)

// cwd()  返回当前进程的工作目录
console.log(process.cwd())
// memoryUsage() 返回一个对象，node进程所用的内存状况，单位字节
console.log(process.memoryUsage())
// uptime() 返回node已经运行的秒数
console.log(process.uptime())
// hrtime() 返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组
console.log(process.hrtime())