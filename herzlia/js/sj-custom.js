jQuery(document).ready(function($) {

	var sj_location_hash = window.location.hash;

	console.log(window.location.hash);

	if (sj_location_hash) {


		jQuery(sj_location_hash).addClass('opened').next('.headline-container').addClass('next');
		jQuery(sj_location_hash + ' .popup-content').addClass('opened');
		jQuery(sj_location_hash + ' .popup-content-inner').addClass('opened');
		jQuery(sj_location_hash + ' .headline-container').addClass('opened');
		jQuery(sj_location_hash + ' .headline-container.next').removeClass('next');
		jQuery(sj_location_hash + ' .popup-content-inner').scrollTop(0);
		jQuery('.popup-content-overlay').addClass('opened');


	}

	jQuery('.nav-popup-btn-next').click(function(){

		var newhash = jQuery('.headline-container.opened').attr('id');
		console.log();
		location.hash = newhash;
	});


	jQuery('.nav-popup-btn-prev').click(function(){

		var newhash = jQuery('.headline-container.opened').attr('id');
		console.log();
		location.hash = newhash;
	});

	}); // document ready

console.log('SJ Custom JS Active');

