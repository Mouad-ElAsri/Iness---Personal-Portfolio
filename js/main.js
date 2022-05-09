jQuery(window).on('load', function() {   
    
    $(".preloader").addClass("hide-preloader");
  
});


jQuery(document).ready(function($) {
	"use strict";
    
    $('.portfolio a').featherlightGallery({
		previousIcon: '&#9664;',   
		nextIcon: '&#9654;',         
		galleryFadeIn: 100,
		galleryFadeOut: 300    
	});
    
});