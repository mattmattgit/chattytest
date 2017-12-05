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

// socket.on('newEmail', function (email) {
// 	console.log('New email', email);
	
// });


socket.on('newMessage', function (message) {
	console.log('new message', message);

	$('#messages').append(`<p>${message.from}: ${message.text}</p>`)
});


$('#user-name-form').on('submit', function (e) {
	e.preventDefault();

	var name = $('[name=user]').val();
	console.log(name);

	$('#message-form').on('submit', function (e) {
		e.preventDefault();

		socket.emit('createMessage', {
			from: name,
			text: $('[name=message]').val()
		}, function () {

		});
	});

});





