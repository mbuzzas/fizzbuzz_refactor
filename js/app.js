$(document).ready(function() {

var limit = parseInt(0 + prompt("Enter a number between 5 and 100"));


function fizzbuzz() {
	for (var i = 1; i <= limit; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$('body').append('<p>fizz buzz</p>');
		}
		else if (i % 3 === 0) {
			$('body').append('<p>fizz</p>');
		}
		else if (i % 5 === 0) {
			$('body').append('<p>buzz</p>');
		}
		else {
			$('body').append('<p>' + i + '</p>');
		}
	}
}

fizzbuzz();
	
})