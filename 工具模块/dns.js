// DNS模块用于解析域名
// dns.lookup(hostname[, options], callback)
// 将域名（比如 'runoob.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6
var dns = require('dns');
dns.lookup('www.github.com', function (err, address, family) {
    console.log('ip地址：', address)
    // dns.reverse(ip, callback)
    // 反向解析 IP 地址，指向该 IP 地址的域名数组。
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack)
        }
        console.log('反向解析：' + address + '：' + JSON.stringify(hostnames))
    })
})







