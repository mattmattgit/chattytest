var socket = io();

socket.on('connect', function () {
	console.log('hi');

	// socket.emit('createEmail', {
	// 	to: 'matt@x.com',
	// 	text: 'why hello'
	// });
});

socket.on('disconnect', function () {
	console.log('broken');
});

socket.on('newEmail', function (email) {
	console.log('new email', email);
});

socket.on('newMessage', function (message) {
	console.log('new message', message);
});

