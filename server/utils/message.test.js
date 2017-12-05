var expect = require('expect');

var {generateMessage} = require('./message.js')

describe('generate message', () => {
	it('should generate message', () => {
		var from = 'matt'
		var text = 'sup'
		var message = generateMessage(from, text)
			// expect(message.createdAt).toBeA('number')
			expect(message.from).toBe(from)
			expect(message.text).toBe(text)
	});
});