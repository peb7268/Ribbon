$(document).ready(function(){
	//Cached vars and globals
	var $main = $('#main'), main_height = $main.height(),
		$ribbon = $('#sidebar #ribbon'), $sidebar = $('#sidebar #inner'), side_height = $sidebar.height(),
		scrollTop = $(window).scrollTop(), 
		scrollBottom = $(window).scrollTop() + $(window).height(),
		max = $(window).scrollTop() + $(window).height();
		
	//when you scroll get the coords
	$(window).on('scroll', function(){
		var window_height = $(window).outerHeight(),
					toTop = $(window).scrollTop(),
			ribbon_height = $('#ribbon').outerHeight(),
		   sidebar_height = $('#sidebar #inner').height(),
					  sum = window_height + toTop;
		
					  function checkPos(){
	  					if(sum > sidebar_height){
	  						console.log('greater')
	  						$ribbon.clearQueue().animate({
	  							marginTop: (window_height - ribbon_height)
	  							}, 100);
	  					} else {
	  						$ribbon.clearQueue().animate({
	  							marginTop: '10px'
	  							}, 100);
	  					}
					  }
					  
			$ribbon.animate({
				top: $(window).scrollTop()
				}, 100, function(){
					
					console.log('window height: ' + window_height + ' sidebar height ' + sidebar_height + ' ribbon height ' + ribbon_height + ' space to top ' + toTop);
					checkPos();
				});
	});
});

