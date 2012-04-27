$(document).ready(function(){
	var $main = $('#main'), 
		height_1 = $main.height(),
		$sidebar = $('#sidebar #inner'),
		height_2 = $sidebar.height(),
		var X = (document.all)?window.screenLeft:window.screenX,
		var Y = (document.all)?window.screenTop:window.screenY;
		
		$(window).on('scroll', function(){
			console.log('scroll');	
		});
});

