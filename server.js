var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({
	port: 3001
});

wss.on('connection', function (ws){
	console.log("lianjie shangle ");
});

