const express = require('express');
const http = require('http');
const socket = require('socket.io')
const path = require('path');

const publicPath = path.join(__dirname, '../public');

let {generateMessage} = require('./utils/message.js')
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socket(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user');

	// socket.emit('newEmail', {
	// 	from: 'mike@ex.com',
	// 	text: 'hi',
	// 	createdAt: 123
	// });

	// socket.on('createEmail', (newEmail) => {
	// 	console.log('create email', newEmail)
	// });

	socket.emit('newMessage', generateMessage('Admin', 'Welcome'));

	socket.broadcast.emit('newMessage' , generateMessage('Admin', 'New User'));

	socket.on('createMessage', (message, callback) => {
		console.log(`There's a new message!`, message);
		io.emit('newMessage', generateMessage(message.from, message.text));
		callback('This is from the server');
		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// })
	})

	socket.on('disconnect', () => {
		console.log('bye')
	});
});

server.listen(port, () => {
	console.log(`listening on ${port}`)
});