/*
	WEB 303 Assignment 1 - jQuery
	
	Name : Poonam Hardik Patel
	Student Id : W0790805
*/

$(document).ready(function(){

	/* Cahnge Event is used... */
	/*
	$("input").change(function(){
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		let tech = ( ( salary * percent ) / 100 );
		$("#amount").text('$' + tech.toFixed(2));
	});
	*/


	/* Keyup Event is used... */
	$("input").keyup(function(){
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		let tech = ( ( salary * percent ) / 100 );
		$("#amount").text('$' + tech.toFixed(2));
	});

});

