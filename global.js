$(document).ready(function(){
	//Cached vars and globals
	var $main = $('#main'), main_height = $main.height(),
		$ribbon = $('#sidebar #ribbon'), $sidebar = $('#sidebar #inner'), side_height = $sidebar.height(),
		scrollTop = $(window).scrollTop(), 
		scrollBottom = $(window).scrollTop() + $(window).height(),
		max = $(window).scrollTop() + $(window).height(),
		ribbon = {};
	
		function doClear(){
			clearTimeout(ribbon.timer);
			ribbon.timer = null;
		}
		
	  function checkPos(ribbon){
		if(ribbon.sum > ribbon.sidebar_height){
			$ribbon.clearQueue().animate({
				marginTop: (ribbon.window_height - ribbon.ribbon_height)
				}, 100, function() { doClear() });
		} else {
			$ribbon.clearQueue().animate({
				marginTop: '10px'
				}, 100, function() { doClear() });
		}
	  }
	  function animateWindow(ribbon) {
			ribbon.timer = setTimeout(function(){
				$ribbon.animate({
					top: $(window).scrollTop()
					}, 500, function(){
						//console.log('window height: ' + window_height + ' sidebar height ' + sidebar_height + ' ribbon height ' + ribbon_height + ' space to top ' + toTop);
						checkPos(ribbon);
					});
				}, 300);
		}
	
		
	//when you scroll get the coords
	$(window).on('scroll', function(){
				ribbon.window_height = $(window).outerHeight(),
				ribbon.toTop = $(window).scrollTop(),
				ribbon.ribbon_height = $('#ribbon').outerHeight(),
			    ribbon.sidebar_height = $('#sidebar #inner').height(),
				ribbon.sum = ribbon.window_height + ribbon.toTop;
		
				animateWindow(ribbon);	  
	});
});

