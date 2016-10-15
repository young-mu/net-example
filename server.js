var net = require('net');

var PORT = 2222;

var server = net.createServer();
server.listen(PORT);

server.on('connection', function(sock) {
    server.close(function() {
        console.log('connection is closed ...');
    });

    console.log('CONNECTED FROM: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function(data) {
        console.log('DATA: ' + data);
        sock.write('I\'m Server!');
    });

    sock.on('close', function(data) {
        console.log('CLOSED BY: ' + sock.remoteAddress + ':' + sock.remotePort);
    });
});

server.on('listening', function() {
    console.log('Server starts to listen on ' + '*' +':'+ PORT);
});

server.on('close', function() {
    console.log('server is closed ...');
});
