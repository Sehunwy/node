var path = require('path')
// normalize() 规范化路径
console.log(path.normalize('./os.js')); // os.js
// join() 用于连接路径，正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
console.log(path.join('工具模块', 'os.js')); // 工具模块\os.js
// resolve()  将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
console.log(path.resolve('/工具模块', './os.js')); // E:\工具模块\os.js
console.log(path.resolve('/工具模块', '/os.js')); // E:\os.js
console.log(path.resolve('工具模块', 'test', '../os.js')); // E:\code\test\node\工具模块\工具模块\os.js
// isAbsolute(path) 判断参数path是否是绝对路径
console.log(path.isAbsolute('E:/code/test/node/工具模块/path.js')); // true
console.log(path.isAbsolute('./path.js')); // false
// path.relative(from, to) 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）
console.log(path.relative('/code/test/node/test/', '/code/test/node/工具模块/path.js')); // ..\工具模块\path.js
// dirname() 返回路径中代表文件夹的部分
console.log(path.dirname('/工具模块/path.js')); // /工具模块
// basename() 返回路径中的最后一部分
console.log(path.basename('/工具模块/path.js')); // path.js
// extname() 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串
console.log(path.extname('./')) // 空字符
console.log(path.extname('/工具模块/path.js')) // .js
// parse() 返回路径字符串的对象
console.log(path.parse('/工具模块/path.js'));
// { root: '/',
//   dir: '/工具模块',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path' }
// path.format(pathObject) 从对象中返回路径字符串，和 path.parse 相反
console.log(path.format({
    root: '/',
    dir: '/工具模块',
    base: 'path.js',
    ext: '.js',
    name: 'path'
})); // /工具模块\path.js



