const http=require('http');
const net=require('net');
const url=require('url');

function connect(cReq, cSock){
    var u = url.parse('http://' + cReq.url);
    var pSock = net.connect(u.port, u.hostname, function() {

        console.log("访问成功"+ u.hostname+u.port);

        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
    }).on('error', function(e) {
        cSock.end();
    });

    cSock.pipe(pSock);
}

http.createServer().on('connect', connect).listen(8888, '0.0.0.0');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write('remoteAddress:'+req.connection.remoteAddress+'\n');
//     res.write('x-forwarded-for:'+req.headers['x-forwarded-for']+'\n');
//     res.write('x-real-ip:'+req.headers['x-real-ip']+'\n');
//     console.log("123");
//     res.end();
// }).listen(443,'0.0.0.0')