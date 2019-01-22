jQuery(document).ready(function() {

	// Change default Fancy Title height
	jQuery( ".rwmb-input-_dt_fancy_header_height .rwmb-text" ).val( "460" );
	jQuery( ".rwmb-input-_dt_fancy_header_height .rwmb-text" ).change(function() {
		jQuery( ".rwmb-input-_dt_fancy_header_height .rwmb-text" ).val( "460" );
	});

	jQuery('.notice:contains("Thank you for choosing The7!")').remove();
	// jQuery('.update-message.notice:contains("To enable updates, please enter your license key")').remove();

});

console.log('Custom ADMIN JS Active');