var net = require('net');

var HOST = '127.0.0.1';
var PORT = 2222;

var client = net.createConnection({port: PORT, host: HOST});

client.on('connect', function () {
    console.log('> connect to : ' + HOST + ':' + PORT);
    client.write('I\'m Client!');
});

client.on('data', function (buffer) {
    console.log('> recv: ' + buffer.toString());
//    client.destroy(); // client close actively (1)
//   client.end(); // client close actively (2), will trigger own end event
});

client.on('close', function () {
    console.log('> close connection');
});

client.on('end', function () {
    console.log('> end is fired');
});

client.on('error', function (error) {
    console.log('> error: ' + error);
});
