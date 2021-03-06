var net = require('net');

var PORT = 2222;

var server = net.createServer();
server.listen(PORT);

server.on('connection', function (sock) {
    console.log('\n> connected from: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {
        console.log('> recv: ' + data);
        sock.write('I\'m Server!');
//        sock.destroy(); // server close actively (1)
        sock.end(); // server close actively (2), will trigger own end event
    });

    sock.on('end', function () {
        console.log('> end is fired');
    });

    sock.on('close', function (data) {
        console.log('> closed by: ' + sock.remoteAddress + ':' + sock.remotePort);
    });
});

server.on('listening', function () {
    console.log('> server starts to listen on ' + '*' +':'+ PORT);
});

server.on('close', function () {
    console.log('> server is closed ...');
});
