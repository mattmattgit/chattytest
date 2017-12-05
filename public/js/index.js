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

	var node = document.createElement("p");                 // Create a <li> node
	var textnode = document.createTextNode(`From: ${JSON.stringify(message.from)} Message: ${message.text}`);       // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("chats").appendChild(node);
});

