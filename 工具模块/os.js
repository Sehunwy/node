var os = require("os");
// tmpdir() 返回操作系统的默认临时文件
console.log(os.tmpdir()); // C:\Users\DELL\AppData\Local\Temp
// endianness() 返回CPU的字节序 'BE'或'LE'
console.log(os.endianness()); // LE
// hostname() 返回操作系统主机名
console.log(os.hostname()); // DESKTOP-LL89G1G
// type() 返回操作系统名
console.log(os.type()); // Windows_NT
// platform() 返回编译时的操作系统名
console.log(os.platform()); // win32
// arch() 返回操作系统CPU架构 'x64'/'arm'/'ia32'
console.log(os.arch()); // x64
// release() 返回操作系统的发行版本
console.log(os.release()); // 10.0.18362
// uptime() 返回操作系统运行时间，以秒为单位
console.log(os.uptime()); // 1988597
// loadavg() 返回一个包含 1、5、15 分钟平均负载的数组
console.log(os.loadavg()); // [ 0, 0, 0 ]
// totalmem() 返回系统内存总量，单位字节
console.log(os.totalmem()); // 8406409216
// freemem() 返回操作系统空闲内存量，单位字节
console.log(os.freemem()); // 2216939520
// cpus() 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）
console.log(os.cpus());
// networkInterfaces() 返回网络接口列表
console.log(os.networkInterfaces())
// EOL 定义操作系统的行尾符的常量
console.log(os.EOL)