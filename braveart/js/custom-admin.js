jQuery(document).ready(function() {

	if ( jQuery("body").hasClass("ac-product") ) {

		// jQuery(".has-post-thumbnail .thumb.column-thumb>a>img").each(function() {
		// 	var var_a = jQuery(this).attr('src');
		// 	var var_b = var_a.slice(-4);
		// 	var var_b2 = var_a.slice(-5);
		// 	var var_c = var_a.slice(0,-12);
		// 	var var_d = var_c+var_b;
		// 	var var_d2 = var_c+var_b2;

		// 	// console.log('var_a: ', var_a);
		// 	// console.log('var_b: ', var_b);
		// 	// console.log('var_c: ', var_c);

		// 	jQuery(this).parents('a').attr('target', '_blank');
		// 	jQuery(this).parents('a').attr('href', var_d);

		// 	jQuery(this).parents('.thumb.column-thumb').append('<a target="_blank" class="error-img">Error?</a>');
		// 	jQuery(this).parents('.thumb.column-thumb').find('.error-img').attr('href', var_d2);

		// });

		// jQuery(".column-meta[data-colname='Model form']").each(function() {
		// 	jQuery(this).find('a').attr('target', '_blank');
		// });

	}

	// Menu
	jQuery('body.vendor #toplevel_page_bulk_edit_list_editables').remove();

	if ( jQuery("body").hasClass("post-type-product") ) {

		// Page options
		jQuery('body.vendor #dt_page_box-header_options').remove();
		jQuery('body.vendor #the7-post-meta-presets-box').remove();
		jQuery('body.vendor #dt_page_box-sidebar').remove();
		jQuery('body.vendor #dt_page_box-footer').remove();
		jQuery('body.vendor #dt_page_box-page_vertical_margins').remove();
		jQuery('body.vendor #authordiv').remove();
		jQuery('body.vendor #postexcerpt').remove();
		jQuery('body.vendor #woocommerce-product-data').remove();
		jQuery('body.vendor #page-links-to').remove();
		jQuery('body.vendor #sis_featured_regenerate').remove();
		jQuery('body.vendor #woocommerce-product-images').remove();

		// On variable load
		jQuery(document).on('woocommerce_variations_loaded', function(event) {

			console.log('woocommerce_variations_loaded');

			// // Variable forcing
			// jQuery(".variation_actions").val("link_all_variations");
			// jQuery(".variations-defaults select").val("medium");

			// // Force Click
			// jQuery('.form-row.form-row-full.options .checkbox').trigger( 'click' );
			// jQuery('.form-row.form-row-full.options .checkbox').prop('checked', true);
			// console.log('enable button clicked');

			// jQuery('.form-row.form-row-full.options .tips').trigger( 'click' );

			// jQuery('.checkbox.variable_is_downloadable').trigger( 'click' );
			// jQuery('.checkbox.variable_is_downloadable').prop('checked', true);
			// console.log('download button clicked');

			// jQuery('.checkbox.variable_is_virtual').trigger( 'click' );
			// jQuery('.checkbox.variable_is_virtual').prop('checked', true);
			// console.log('virtual button clicked');

			// jQuery('.form-field.variable_regular_price_0_field .wc_input_price').val('164.50');
			// jQuery('.form-field.variable_regular_price_1_field .wc_input_price').val('168');
			// jQuery('.form-field.variable_regular_price_2_field .wc_input_price').val('175');
			// jQuery('.form-field.variable_regular_price_3_field .wc_input_price').val('185');
			// jQuery('.form-field.variable_regular_price_4_field .wc_input_price').val('195');

			// // Variable options
			// jQuery('.form-row.form-row-full.options').hide();
			// jQuery('.form-row.form-row-first.upload_image').remove();
			// jQuery('.form-row.remove_if_variation_virtual.form-row-full').remove();
			// jQuery('.form-field.dimensions_field').remove();
			// jQuery('.form-row.hide_if_variation_virtual.form-row-full').remove();
			// jQuery('.wcpv-commission.form-row.form-row-first').remove();
			// jQuery('.options_group.wcpv-per-product-shipping').remove();

			// // Variable options 0
			// jQuery('.form-field.variable_regular_price_0_field').hide();
			// jQuery('.form-field.variable_sale_price0_field').remove();
			// jQuery('.form-field.variable_stock_status0_field').remove();
			// jQuery('.form-field.variable_weight0_field').remove();
			// jQuery('.form-field.variable_sale_price0_field').remove();
			// jQuery('.form-field.variable_download_limit0_field').remove();
			// jQuery('.form-field.variable_download_expiry0_field').remove();

			// // Variable options 2
			// jQuery('.form-field.variable_regular_price_1_field').hide();
			// jQuery('.form-field.variable_sale_price1_field').remove();
			// jQuery('.form-field.variable_stock_status1_field').remove();
			// jQuery('.form-field.variable_weight1_field').remove();
			// jQuery('.form-field.variable_sale_price1_field').remove();
			// jQuery('.form-field.variable_download_limit1_field').remove();
			// jQuery('.form-field.variable_download_expiry1_field').remove();

			// // Variable options 3
			// jQuery('.form-field.variable_regular_price_2_field').hide();
			// jQuery('.form-field.variable_sale_price2_field').remove();
			// jQuery('.form-field.variable_stock_status2_field').remove();
			// jQuery('.form-field.variable_weight2_field').remove();
			// jQuery('.form-field.variable_sale_price2_field').remove();
			// jQuery('.form-field.variable_download_limit2_field').remove();
			// jQuery('.form-field.variable_download_expiry2_field').remove();

			// // Variable options 4
			// jQuery('.form-field.variable_regular_price_3_field').hide();
			// jQuery('.form-field.variable_sale_price3_field').remove();
			// jQuery('.form-field.variable_stock_status3_field').remove();
			// jQuery('.form-field.variable_weight3_field').remove();
			// jQuery('.form-field.variable_sale_price3_field').remove();
			// jQuery('.form-field.variable_download_limit3_field').remove();
			// jQuery('.form-field.variable_download_expiry3_field').remove();

			// // Variable options 5
			// jQuery('.form-field.variable_regular_price_4_field').hide();
			// jQuery('.form-field.variable_sale_price4_field').remove();
			// jQuery('.form-field.variable_stock_status4_field').remove();
			// jQuery('.form-field.variable_weight4_field').remove();
			// jQuery('.form-field.variable_sale_price4_field').remove();
			// jQuery('.form-field.variable_download_limit4_field').remove();
			// jQuery('.form-field.variable_download_expiry4_field').remove();

		});

	}

});

console.log('Custom Admin JS Active');