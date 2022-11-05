$(document).ready(function(){
	//tab code
	$('.tab_a:first').show();
	$('.tab_b:first').addClass('active');

	$('.tab_b li').click(function(event) {
		index = $(this).index();
		$('.tab_b li').removeClass('active');
		$(this).addClass('active');
		$('.tab_a').hide();
		$('.tab_a').eq(index).show();
	});

	$('.tab_a1:first').show();
	$('.tab_b1 li:first').addClass('active');

	$('.tab_b1 li').click(function(event) {
		index = $(this).index();
		$('.tab_b li').removeClass('active');
		$(this).addClass('active');
		$('.tab_a1').hide();
		$('.tab_a1').eq(index).show();
	});


//accordian code
	$('.accordian_b:first').addClass('active')
	$('.accordian_b:first').children('.acc_trigger').children('i').addClass('fa-minus')
	$('.accordian_b:first').children('.acc_trigger').addClass('selected').next('.acc_a').show()

	$('.acc_trigger').click(function(event){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).children('i').removeClass('fa-minus');
			$(this).next().slideUp();
			$(this).parent().removeClass('active');
		}else{
			$('.acc_trigger').removeClass('selected');
			$(this).addClass('selected');
			$('.acc_trigger').children('i').removeClass('fa-minus');
			$(this).children('i').addClass('fa-minus');
			$('.acc_trigger').next().slideUp();
			$(this).next().slideDown();
			$('.accordian_b').removeClass('active');
			$(this).parent().addClass('active');

		}
	});
});