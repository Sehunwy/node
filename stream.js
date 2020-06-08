// stream是一个抽象接口 stream有四种流类型：Readable：可读操作、Writable：可写操作、Duplex：可读可写操作、Transform：操作被写入数据，然后读出数据
// 常用事件：data当有数据可读性时触发、end没有更多数据可读性时触发、error在接收和写入过程中发生错误时触发、finish所有数据已被写入到底层系统时触发

// 从流中读取数据
var fs = require('fs');
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码
readerStream.setEncoding("UTF8");
// 处理流事件  -->data,end and error
readerStream.on('data', function (chunk) {
    data += chunk;
})
readerStream.on('end', function () {
    console.log(data)
})
readerStream.on('error', function (err) {
    console.log(err.stack);
})

// 写入流
// 创建写入流
var data1 = 'output写入数据'
var writerStream = fs.createWriteStream('output.txt');
// 使用utf8编码写入数据
writerStream.write(data1, 'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件
writerStream.on('finish', function () {
    console.log("写入完成")
})
writerStream.on("error", function (err) {
    console.log(err.stack)
})

// 管道流
// 管道读写操作
var writerStream1 = fs.createWriteStream('output1.txt');
readerStream.pipe(writerStream1)

// 链式流  链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作
// 压缩文件
var zlib = require('zlib');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.zip"));
console.log("压缩完成")
// 解压文件
fs.createReadStream('input.txt.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input1.txt'));
console.log("解压完成")

