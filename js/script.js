 // You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 1
      // $("#slider1").responsiveSlides({
      //   speed: 1200
      // });
	  $.scrollIt();
	  
	$j=jQuery.noConflict();
$j(document).ready(function() {
	
	var nav = $j('#logo');
	$j(window).scroll(function () {
		if ($j(this).scrollTop() > 380) {

			nav.addClass("scroll-nav");

		} else {
			nav.removeClass("scroll-nav");

		}
	});
});
    });