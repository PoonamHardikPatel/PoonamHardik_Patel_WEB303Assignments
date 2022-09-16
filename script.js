/*
	WEB 303 Assignment 1 - jQuery
	
	Name : Poonam Hardik Patel
	Student Id : W0790805
*/

$(document).ready(function(){

	/* Cahnge Event is used... */
	$("input").change(function(){	// Selection of both input tag

		// Declare a variables using css selectors - getting values from user with .val() method
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		// Mathematics - calculate amount to spent on tech 
		let tech = ( ( salary * percent ) / 100 );

		// Display the result
		$("#amount").text('$' + tech.toFixed(2));
	});


	/* Keyup Event is used... */
	/*
	$("input").keyup(function(){	// Selection of both input tag

		// Declare a variables using css selectors - getting values from user with .val() method
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		// Mathematics - calculate amount to spent on tech 
		let tech = ( ( salary * percent ) / 100 );

		// Display the result
		$("#amount").text('$' + tech.toFixed(2));
	});
	*/
});

