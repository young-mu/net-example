var net = require('net');

var HOST = '127.0.0.1';
var PORT = 2222;

var client = net.createConnection({port: PORT, host: HOST});

client.on('connect', function() {
    console.log('CONNECT TO: ' + HOST + ':' + PORT);
    client.write('I\'m Client!');
});

client.on('data', function(buffer) {
    var data = buffer.toString();
    console.log('DATA: ' + data);
    if (data.indexOf('end') !== -1) {
        client.destroy();
    }
});

client.on('close', function() {
    console.log('CLOSE CONNECTION');
});

client.on('error', function(error) {
    console.log('ERROR: ' + error);
});
