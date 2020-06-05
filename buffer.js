// Buffer类:用来创建一个专门存放二进制数据的缓存区

// Node.js 目前支持的字符编码包括：
// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
// ucs2 - utf16le 的别名。
// base64 - Base64 编码。
// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
// binary - latin1 的别名。
// hex - 将每个字节编码为两个十六进制字符

// 创建buffer类
// 1.Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
const buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
// 2.Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf2 = Buffer.allocUnsafe(10)
console.log(buf2); // <Buffer 70 41 a4 95 8c 02 00 00 20 42>
// 3.Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3); // <Buffer 01 02 03>
const buf4 = Buffer.from('test');
console.log(buf4); // <Buffer 74 65 73 74>
const buf5 = Buffer.from('test', 'latin1');
console.log(buf5); // <Buffer 74 65 73 74>

// 写入缓存区
// buf.write(string[, offset[, length]][, encoding])
// tring - 写入缓冲区的字符串
// offset - 缓冲区开始写入的索引值，默认为 0 
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 
const buf = Buffer.alloc(256);
var len = buf.write("写入缓冲区");
console.log("写入字节数：" + len); // 写入字节数：15

// 从缓冲区读取数据
// buf.toString([encoding[, start[, end]]])
// encoding - 使用的编码。默认为 'utf8' 
// start - 指定开始读取的索引位置，默认为 0
// end - 结束位置，默认为缓冲区的末尾
console.log(buf.toString()); // 写入缓冲区
const buf6 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf6[i] = i + 97;
}
console.log(buf6.toString('ascii')); // abcdefghijklmnopqrstuvwxyz
console.log(buf6.toString('ascii', 0, 5)); // abcde
console.log(buf6.toString('utf8', 0, 5)); // abcde
console.log(buf6.toString(undefined, 0, 5)); // 使用默认的utf8,abcde

// 将buffer转换为json对象  buf.toJSON()
const buf7 = Buffer.from([0x1, 0x2, 0x3, 0x4]);
const json = JSON.stringify(buf7);
console.log(json); // {"type":"Buffer","data":[1,2,3,4]}

// 缓冲区合并
// Buffer.concat(list[, totalLength])
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
var buffer1 = Buffer.from('缓冲区');
var buffer2 = Buffer.from('合并');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString()); // 缓冲区合并

// 缓冲区比较
// buf.compare(otherBuffer);
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('BCDE');
var res = buffer4.compare(buffer5);
// ABC在BCDE之前
if (res < 0) {
    console.log(buffer4 + '在' + buffer5 + '之前');
}
else if (res == 0) {
    console.log(buffer4 + '与' + buffer5 + '相同');
}
else {
    console.log(buffer4 + '在' + buffer5 + '之后');
}

// 拷贝缓冲区
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length
var buff1 = Buffer.from('copy abcdef');
var buff2 = Buffer.from('buffer');
buff2.copy(buff1,5)
console.log(buff1.toString()); // copy buffer

// 缓冲区剪裁  返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切
// buf.slice([start[, end]])
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length
var buff3 = Buffer.from('缓冲区剪裁');
var buff4 = buff3.slice(0,9);
console.log(buff4.toString()); // 缓冲区

// 缓冲区长度 length
console.log(buff3.length); // 15


