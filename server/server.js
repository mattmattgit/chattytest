const express = require('express');
const http = require('http');
const socket = require('socket.io')
const path = require('path');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socket(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user');

	socket.on('disconnect', () => {
		console.log('bye')
	});
});



server.listen(port, () => {
	console.log(`listening on ${port}`)
});