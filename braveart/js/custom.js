jQuery(document).ready(function() {

	jQuery(".credit-buy-url").addClass("oo-bt");
	jQuery(".credit-buy-url").addClass("oo-sm-bt");
	jQuery(".credit-buy-url").addClass("oo-dark-yellow");


	function testing24323() {

		jQuery(document).ready(function () {
			if(window.location.href.indexOf("franky") > -1) {
				alert("your url contains the name franky");
			}
		});

	}

	function capitalizeFirstLetter() {

		jQuery("title, .page-title .entry-title, .related.products .product-title, .entry-title a").each(function () {
			var var_html = jQuery(this).html();
			var var_txt = var_html.charAt(0).toUpperCase() + var_html.slice(1);
			jQuery(this).html(var_txt);
		})

	} capitalizeFirstLetter();

	jQuery(".vendor-form-container p.woocommerce-message").removeClass("woocommerce-message");
	jQuery(".vendor-form-container h2").remove();
	jQuery(".masthead .searchandfilter").addClass("main-nav");
	jQuery("body.home.sticky-on .searchandfilter.main-nav").css("opacity", "1");
	jQuery(".tagged_as").insertAfter( ".summary.entry-summary" );
	jQuery(".related.products h2").html("Related images");
	jQuery(".woocommerce-products-header__title.page-title").remove();

	function browseByCat() {

		var url = window.location.pathname;
		var urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
		jQuery('.col-1-list a').each(function() {
			if( urlRegExp.test(this.href.replace(/\/$/,'')) ) {
				jQuery(this).addClass('active');
			}
		});

	} browseByCat();

	function paragraphExpander() {

		jQuery( ".wcpv-vendor-profile.entry-summary" ).addClass( "para-expandable" );

		jQuery( ".para-expandable" ).each(function() {

			if ( jQuery(this).children( "p" ).length > 1 ) {

				jQuery(this).children( "p:not(:first)" ).hide();
				jQuery(this).append( "<button class='para-expander-btn oo-bt oo-sm-bt oo-dark-yellow capitalize'>Read More</button>" );

				jQuery(this).find( ".para-expander-btn" ).toggle(function() {
					jQuery(this).siblings( "p:not(:first)" ).slideDown();
					jQuery(this).html( "Read less" );
				}, function() {
					jQuery(this).siblings( "p:not(:first)" ).slideUp();
					jQuery(this).html( "Read more" );
				});

			}

		});

	} paragraphExpander();
	
	function homepageHeaderImg() {

		// Variables

	} homepageHeaderImg();
	
	function forceFullWidth() {

		// Variables
		var viewportWidth = jQuery( window ).width();
		var viewportHeight = jQuery( window ).height();

		var wfWrapOuterWidth = jQuery( ".wf-wrap" ).outerWidth();
		var wfWrapWidth = jQuery( ".wf-wrap" ).width();

		// Force full width variables
		var ffw_a = viewportWidth - wfWrapOuterWidth;
		var ffw_b = ffw_a/2;
		var ffw_c = ffw_b+15;
		var ffw_d = ffw_b+30;

		// Force full width
		jQuery( "#main .force-full-width" ).css( "width", viewportWidth );
		jQuery( "#main .force-full-width" ).css( "margin-left", -ffw_d );
		jQuery( "#main #content .force-full-width" ).css( "width", viewportWidth );
		jQuery( "#main #content .force-full-width" ).css( "margin-left", -ffw_d );
		jQuery( "#main #content .force-full-width .vc_column-inner" ).css( "max-width", wfWrapWidth );

	} forceFullWidth();

	// Execute script on window resize
	jQuery(window).resize(function() {

		forceFullWidth();

		console.log('Window Resize JS Active')

	});

	// Execute script in Gravity Forms
	jQuery(document).bind('gform_post_render', function(){
	
		// Code to go here

		console.log('Gravity Forms JS Active')

	});

});

function singleProdImg() {

	jQuery('.attachment-shop_single.size-shop_single.wp-post-image').load(function() {

		console.log('loaded')
		var imgWidth = jQuery('.attachment-shop_single.size-shop_single.wp-post-image').width();
		var imgHeight = jQuery('.attachment-shop_single.size-shop_single.wp-post-image').height();
		console.log('imgWidth:', imgWidth)
		console.log('imgHeight:', imgHeight)

		if ( imgHeight > imgWidth ) {
			console.log('Height is MORE than width')
			jQuery('.woocommerce-product-gallery__wrapper').addClass('portrait');
			jQuery('.woocommerce-product-gallery__wrapper').addClass('bg-now');
		} else {
			console.log('Height is LESS than width')
			jQuery('.woocommerce-product-gallery__wrapper').removeClass('portrait');
			jQuery('.woocommerce-product-gallery__wrapper').removeClass('bg-now');
		}

	});

} singleProdImg();


console.log('Custom JS Active');