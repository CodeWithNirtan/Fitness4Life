(function($, document, window){
	
	$(document).ready(function(){
		$(".offer img").panr({
			sensitivity: 15,
			scale: false,
			scaleOnHover: true,
			scaleTo: 1.2,
			scaleDuration: 0.25,
			panY: true,
			panX: true,
			panDuration: 1.25,
			resetPanOnMouseLeave: false
		});

		$(".hero-slider").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

})(jQuery, document, window);