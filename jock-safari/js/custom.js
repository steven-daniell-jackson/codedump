/* When document is ready... */

jQuery(document).ready(function() {

	/* Initialise magnific popup */
	
	jQuery('.roi-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* On gallery icon click */
	
	jQuery('body').on('click', '#roi-open-gallery', function(e) {

		/* Prevent default click event */
		
		e.preventDefault();

		/* Trigger click of first gallery item */
		console.log('clicked gallery icon');
		jQuery('.roi-gallery a:first').trigger('click');
	});

	/* Hover box transition */
	
	jQuery('.hover_box').hover(function() {
		jQuery(this).find('.hidden_photo').animate({opacity: 1}, 500);
	}, function() {
		jQuery(this).find('.hidden_photo').animate({opacity: 0}, 500);
	});

	/* Contact form wrap */
	
	jQuery('#field_1_6, #field_1_7, #field_1_8').wrapAll('<li class="gfield gf_right_half"></li>');

	/* 0 margin on Collapse-O-Matic parent */
	
	jQuery('.collapseomatic').parent('p').css('margin', 0);

	/* Tab no hashed URL */
	
	jQuery('a[data-vc-container=".vc_tta"]').click(function(e) {
		// Prevent default
		e.preventDefault();

		// Save hash
		var hash = jQuery(this).attr('href');

		// Save id
		var id = hash.replace('#', '');

		// Save panel
		var $panel = jQuery(hash);

		// Make other panels' height 0
		$panel.siblings('.vc_tta-panel').find('.vc_tta-panel-body').animate({
			height: '0%'},
			200, function() {

			});

		$panel.find('.vc_tta-panel-body').slideUp(200);

		// Remove active classes from list
		jQuery(this).closest('.vc_tta-tab').siblings('li').removeClass('vc_active');

		// Change parent class
		jQuery(this).closest('.vc_tta-tab').addClass('vc_active');

		// Remove other panels' active class
		$panel.siblings('.vc_tta-panel').removeClass('vc_active');

		// Make panel active
		$panel.addClass('vc_active');



		return false;
	});

	/* Responsive for to top arrow */
	
	enquire.register("screen and (max-width:767px)", {

		/* If media query match */
		
		match : function() {

			/* Set waypoint to content wrapper */
			
			var waypoints = jQuery('.the_content_wrapper').waypoint({

				/* Handler */
				
				handler: function(direction) {

					/* If scroll direction is down */
					
					if (direction == 'down') {

						/* Fade in back to top element */
						
						jQuery('#back_to_top').fadeIn(200);

					/* If direction is up */
					
					} else {

						/* Fade out back to top element */
						
						jQuery('#back_to_top').fadeOut(200);
					}
				}
			});
		}
	});


// Read more
jQuery('button.read-more').on('click', function() {
  jQuery('#rates-content').slideDown().css("height", "100%");
  jQuery(this).hide();
  console.log("clicked");
});

});