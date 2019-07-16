(function ($) {
	var getBrowserWidth = function(){
		if(window.innerWidth < 768){
			// Extra Small Device
			$('.MainPage').css('top','8.5rem');
			isMobile = 1
		} else if(window.innerWidth < 991){
			// Small Device
			$('.MainPage').css('top','5.9rem')
			isMobile = 1;
		} else if(window.innerWidth < 1199){
			// Medium Device
			$('.MainPage').css('top','5.9rem')
		} else {
			// Large Device
			$('.MainPage').css('top','5.9rem');
		}
	};

	getBrowserWidth();

	$(window).on('resize',function(){
		getBrowserWidth();
	});

}(jQuery));
