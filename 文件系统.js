var fs = require("fs");
// 异步读取
fs.readFile('input.txt',function(err,data) {
    if(err) {
        return console.error(err)
    }
    console.log("异步读取：",data.toString())
})
// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取：",data.toString());
console.log("程序执行完毕！")

// 打开文件 异步模式获取 fs.open(path, flags[, mode], callback)
// path - 文件的路径。
// flags - 文件打开的行为。
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)
// flags值: r:以读取模式打开文件，如果文件不存在抛出异常
//          r+:以读写模式打开文件，如果不存在抛出异常
//          rs:以同步的方式读取
//          rs+:以同步的方式读取和写入文件
//          w:以写入模式打开文件，如果文件不存在则创建
//          wx:类似'w'，如果文件路径存在，则文化写入失败
//          w+:以读写模式打开文件，如果文件不存在则创建
//          wx+:类似'w+'，但如果文件路径存在，则文件读写失败
//          a:以追加模式打开文件，如果文件不存在则创建
//          ax:类似'a'，但如果文件路径存在，则文件追加失败
//          a+:以读取追加模式打开文件，如果文件不存在则创建
//          ax+:类似'a+'，但如果文件路径存在，则文件读取追加失败
fs.open('input.txt','r',function(err,fd) {
    if(err) {
        return console.error(err)
    }
    console.log("文件打开成功")
})

// 获取文件信息 异步模式获取 fs.stat(path, callback)
// path - 文件路径。
// callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象
// isFile() 判断是否为文件
// isDirectory() 判断是否为目录
// isBlockDevice() 判断是否为块设备
// isCharacterDevice() 判断是否为字符设备
// isSymbolicLink() 判断是否为软链接
// isFIFO() 判断是否为FIFO，FIFO是UNIX中的一种特殊类型的命令管道
// isSocket() 判断是否为Socket
fs.stat('input.txt',function(err,stats) {
    console.log("是否为文件："+stats.isFile()); // true
    console.log("是否为目录："+stats.isDirectory()); // false
    console.log("是否为块设备："+stats.isBlockDevice()); // false
    console.log("是否为字符设备："+stats.isCharacterDevice()); // false
    console.log("是否为软链接："+stats.isSymbolicLink()); // false
    console.log("是否为FIFO："+stats.isFIFO()); // false
    console.log("是否为Socket："+stats.isSocket()); // false
})

// 写入文件 异步模式下写入文件 fs.writeFile(file, data[, options], callback)
// file - 文件名或文件描述符。
// data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
// options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
// callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
fs.writeFile('input1.txt',"通过writeFile写入文件的内容",function(err){
    if(err) {
        return console.error(err)
    }
    fs.readFile('input1.txt',function(err,data) {
        if(err) {
            return console.error(err)
        }
        console.log("读取input1文件内容："+data.toString())
    })
})

// 关闭文件 异步模式下关闭文件 fs.close(fd, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// callback - 回调函数，没有参数。

// 读取文件 异步模式下读取文件 fs.read(fd, buffer, offset, length, position, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。
// length - 要从文件中读取的字节数。
// position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
// callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象
var buf = new Buffer.alloc(1024)
fs.open('input.txt','r+',function(err,fd) {
    if(err) {
        return console.error(err)
    }
    fs.read(fd,buf,0,buf.length,0,function(err,bytes) {
        if(err) {
            return console.error(err)
        }
        console.log(bytes+" 字节被读取");
        // 仅输出读取字节
        if(bytes>0) {
            console.log(buf.slice(0,bytes).toString())
        }
        // 关闭文件
        fs.close(fd,function() {
            console.log("文件关闭成功")
        })
    })
})

// 截取文件  异步模式下截取文件 fs.ftruncate(fd, len, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// len - 文件内容截取的长度。
// callback - 回调函数，没有参数。
fs.open('input.txt','r+',function(err,fd) {
    if(err) {
        return console.error(err)
    }
    // 截取文件
    fs.ftruncate(fd,4,function() {
        console.log("文件截取成功");
        fs.read(fd,buf,0,buf.length,0,function(err,bytes) {
            if(err) {
                return console.error(err)
            }
            // 仅输出读取的字节
            if(bytes>0) {
                console.log(buf.slice(0,bytes).toString())
            }
            // 关闭文件
            fs.close(fd,function() {
                console.log("文件关闭成功")
            })
        })
    })
})

// 删除文件  fs.unlink(path, callback)
// path - 文件路径。
// callback - 回调函数，没有参数。
fs.unlink('input2.txt',function() {
    console.log("文件删除成功")
})

// 创建目录 fs.mkdir(path[, options], callback)
// path - 文件路径。
// options 参数可以是： recursive - 是否以递归的方式创建目录，默认为 false；mode - 设置目录权限，默认为 0777。
// callback - 回调函数，没有参数。
fs.mkdir('tmp',function() {
    console.log("目录创建成功")
})

// 读取目录 fs.readdir(path, callback)
// path - 文件路径。
// callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表
fs.readdir('路由',function(err,files) {
    if(err) {
        return console.error(err)
    }
    console.log(files)
})

// 删除目录 fs.rmdir(path, callback)
// path - 文件路径。
// callback - 回调函数，没有参数。
fs.rmdir('test',function() {
    console.log("目录删除成功")
})







