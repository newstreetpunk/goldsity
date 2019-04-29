$(function(){

		/*$(window).resize(function(){
			if($(this).width() < 992) {
				$('br').css('display', 'none');
			} else{
				$('br').css('display', 'block');
			}
		});*/

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.all-cases').addClass("active");
		} else {
			$('.all-cases').removeClass("active");
		};
	});
	
	$('.btn-play').magnificPopup({
		disableOn: 700,
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,

		fixedContentPos: false,
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/', 
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src', 
		}
		});
});