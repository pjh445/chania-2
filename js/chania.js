$(document).ready(function(){
	$('header button').click(function(){		
		if(   $('header button').text()== 'menu' ){
			$('header button').text('close');
			$("nav").stop().slideDown();
		}
		else{
			$('header button').text('menu');
			$("nav").stop().slideUp();
		}
	});
	
	$('a').click(function(){
		$('header button').text('menu');
		$("nav").stop().slideUp();
	});
	
	
});///////////////////end