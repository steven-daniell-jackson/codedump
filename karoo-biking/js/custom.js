jQuery(document).ready(function() {

	function gravityFormsScriptId_8() {

		jQuery( "#input_8_166" ).change(function() {
			var value = jQuery('select#input_8_166 option:selected').text();
			jQuery('.tour-name').text(value);

			var priceValue = jQuery( "#field_8_160 .ginput_total" ).text();
			var fromPriceValue = "FROM: " + priceValue + " per rider";
			jQuery('.price-name').text(fromPriceValue);
		});

		jQuery( ".tour-date" ).change(function() {
			var value = jQuery(this).find('select option:selected').text();
			jQuery('.date-name').text(value);
		});

		jQuery( "#field_8_160" ).find('.ginput_total').change(function() {
			var value = jQuery(this).text();
			alert(value);
			// jQuery('.price-name').text(value);
		});

		// Disable close button 1
		jQuery('.add-remove-rider-container.rider2 > div > ul > li:nth-child(1)').click(function(){
			jQuery('.add-remove-rider-container.rider1 > div > ul > li:last-child').hide();
			jQuery('.rider1').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider2 > div > ul > li:nth-child(2)').click(function(){
			jQuery('.add-remove-rider-container.rider1 > div > ul > li:last-child').hide();
			jQuery('.rider1').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider2 > div > ul > li:nth-child(3)').click(function(){
			jQuery('.add-remove-rider-container.rider1 > div > ul > li:last-child').show();
			jQuery('.rider1').css('opacity', '1');
		});

		// Disable close button 2
		jQuery('.add-remove-rider-container.rider3 > div > ul > li:nth-child(1)').click(function(){
			jQuery('.add-remove-rider-container.rider2 > div > ul > li:last-child').hide();
			jQuery('.rider2').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider3 > div > ul > li:nth-child(2)').click(function(){
			jQuery('.add-remove-rider-container.rider2 > div > ul > li:last-child').hide();
			jQuery('.rider2').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider3 > div > ul > li:nth-child(3)').click(function(){
			jQuery('.add-remove-rider-container.rider2 > div > ul > li:last-child').show();
			jQuery('.rider2').css('opacity', '1');
		});

		// Disable close button 3
		jQuery('.add-remove-rider-container.rider4 > div > ul > li:nth-child(1)').click(function(){
			jQuery('.add-remove-rider-container.rider3 > div > ul > li:last-child').hide();
			jQuery('.rider3').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider4 > div > ul > li:nth-child(2)').click(function(){
			jQuery('.add-remove-rider-container.rider3 > div > ul > li:last-child').hide();
			jQuery('.rider3').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider4 > div > ul > li:nth-child(3)').click(function(){
			jQuery('.add-remove-rider-container.rider3 > div > ul > li:last-child').show();
			jQuery('.rider3').css('opacity', '1');
		});

		// Disable close button 4
		jQuery('.add-remove-rider-container.rider5 > div > ul > li:nth-child(1)').click(function(){
			jQuery('.add-remove-rider-container.rider4 > div > ul > li:last-child').hide();
			jQuery('.rider4').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider5 > div > ul > li:nth-child(2)').click(function(){
			jQuery('.add-remove-rider-container.rider4 > div > ul > li:last-child').hide();
			jQuery('.rider4').css('opacity', '0.5');
		});
		jQuery('.add-remove-rider-container.rider5 > div > ul > li:nth-child(3)').click(function(){
			jQuery('.add-remove-rider-container.rider4 > div > ul > li:last-child').show();
			jQuery('.rider4').css('opacity', '1');
		});


		
	}

	function gravityFormsScriptId_6() {

	}

	// Execute script on window resize
	jQuery(window).resize(function() {

		// Code to go here
		console.log('Window Resize JS Active')

	});

	// Execute script in Gravity Forms
	jQuery(document).bind('gform_post_render', function(event, formId) {

		if ( formId == 8 ) {

			gravityFormsScriptId_8();
			console.log('Gravity Forms ID 8 Active')

		} else if ( formId == 6 ) {

			gravityFormsScriptId_6();
			console.log('Gravity Forms ID 6 Active')
			
		}

		console.log('Gravity Forms JS Active')

	});


}); // document ready

console.log('Custom JS Active');


