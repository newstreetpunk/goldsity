$(function(){

	$(window).scroll(function() {
  		if ($(this).scrollTop() > $(window).height()) {
    		$('.all-cases').addClass("active");
  		} else {
    		$('.all-cases').removeClass("active");
  		};
	});
});